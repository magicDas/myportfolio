require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const { body, validationResult } = require('express-validator');
const axios = require('axios');

const app = express();

// Настройка безопасности
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL, // Разрешаем запросы только с нашего фронтенда
  credentials: true
}));
app.use(express.json({ limit: '10kb' })); // Ограничиваем размер JSON

// Настройка rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 5, // Максимум 5 запросов с одного IP
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/contact', limiter);

// Настройка SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Валидация и санитизация входных данных
const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .escape(),
  body('email')
    .isEmail()
    .normalizeEmail(),
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .escape(),
  body('captcha')
    .notEmpty()
];

app.post('/api/contact', validateContact, async (req, res) => {
  try {
    const recaptchaToken = req.headers['x-recaptcha-token'];
    
    // Проверка reCAPTCHA
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    // Проверка валидации
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Создаем email
    const msg = {
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.VERIFIED_SENDER, // Верифицированный отправитель в SendGrid
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `
        <div style="background-color: #f6f6f6; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error:', error);
    // Не отправляем детали ошибки клиенту
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});