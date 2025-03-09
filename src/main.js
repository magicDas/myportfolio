import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
// Удаляем или комментируем импорт reCAPTCHA
// import { VueReCaptcha } from 'vue-recaptcha-v3'
import App from '@/App.vue'
import '@/assets/styles/main.css'
import router from '@/router'

import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
      en,
      ru
  }
})

const app = createApp(App)
// Комментируем или удаляем настройку reCAPTCHA
// app.use(VueReCaptcha, {
//   siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
//   loaderOptions: {
//     useRecaptchaNet: true,
//     autoHideBadge: true
//   }
// })

app.use(router)
app.use(i18n)
app.mount('#app') 



  // const flashlight = document.getElementById('flashlight')

  // document.addEventListener('mousemove', (event) => {
  //   const x = event.clientX;
  //   const y = event.clientY;
  
  //   flashlight.style.left = (x - 90) + 'px';
  //   flashlight.style.top = (y - 70) + 'px';
  // });
