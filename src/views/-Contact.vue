<template>  
  <div class="text-white content">
    <h1 class="text-4xl font-bold mb-8 text-center">{{ $t('contact.title') }}</h1>
    <div class="max-w-2xl mx-auto">
      <form @submit.prevent="submitForm" class="space-y-6" novalidate>
        <!-- Name -->
        <div>
          <label for="name" class="block text-lg mb-2">{{ $t('contact.form.name') }}</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            :class="[
              'w-full px-4 py-2 rounded-lg',
              'bg-purple-800 text-white',
              { 'border-2 border-red-500': v$.form.name.$error }
            ]"
            @blur="v$.form.name.$touch()"
            maxlength="50"
          />
          <p v-if="v$.form.name.$error" class="mt-1 text-red-500 text-sm">
            {{ v$.form.name.$errors[0].$message }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-lg mb-2">{{ $t('contact.form.email') }}</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            :class="[
              'w-full px-4 py-2 rounded-lg',
              'bg-purple-800 text-white',
              { 'border-2 border-red-500': v$.form.email.$error }
            ]"
            @blur="v$.form.email.$touch()"
            maxlength="100"
          />
          <p v-if="v$.form.email.$error" class="mt-1 text-red-500 text-sm">
            {{ v$.form.email.$errors[0].$message }}
          </p>
        </div>

        <!-- Сообщение -->
        <div>
          <label for="message" class="block text-lg mb-2">{{ $t('contact.form.message') }}</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            :class="[
              'w-full px-4 py-2 rounded-lg',
              'bg-purple-800 text-white',
              { 'border-2 border-red-500': v$.form.message.$error }
            ]"
            @blur="v$.form.message.$touch()"
            rows="5"
            maxlength="1000"
          ></textarea>
          <p v-if="v$.form.message.$error" class="mt-1 text-red-500 text-sm">
            {{ v$.form.message.$errors[0].$message }}
          </p>
        </div>

        <!-- Captcha -->
        <div>
          <label for="captcha" class="block text-lg mb-2">{{ $t('contact.form.captcha') }}</label>
          <div class="flex items-center gap-4">
            <span class="bg-purple-700 px-4 py-2 rounded-lg">{{ captcha.question }}</span>
            <input 
              type="number" 
              id="captcha" 
              v-model="form.captcha" 
              :class="[
                'w-24 px-4 py-2 rounded-lg',
                'bg-purple-800 text-white',
                { 'border-2 border-red-500': v$.form.captcha.$error }
              ]"
              @blur="v$.form.captcha.$touch()"
            />
          </div>
          <p v-if="v$.form.captcha.$error" class="mt-1 text-red-500 text-sm">
            {{ v$.form.captcha.$errors[0].$message }}
          </p>
        </div>

        <!-- Submit -->
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all 
                 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isSubmitting">{{ $t('contact.form.sending') }}</span>
          <span v-else>{{ $t('contact.form.submit') }}</span>
        </button>

        <!-- Сообщения об успехе/ошибке -->
        <div v-if="submitStatus" :class="[
          'mt-4 p-4 rounded-lg',
          submitStatus === 'success' ? 'bg-green-600' : 'bg-red-600'
        ]">
          {{ $t(`contact.form.${submitStatus}`) }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Состояние формы
const form = ref({
  name: '',
  email: '',
  message: '',
  captcha: ''
})

// Состояние отправки
const isSubmitting = ref(false)
const submitStatus = ref('')

// Генерация капчи
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10)
  const num2 = Math.floor(Math.random() * 10)
  return {
    question: `${num1} + ${num2} = ?`,
    answer: num1 + num2
  }
}

const captcha = ref(generateCaptcha())

// Правила валидации
const rules = computed(() => ({
  form: {
    name: { 
      required: helpers.withMessage(t('validation.required'), required),
      minLength: helpers.withMessage(
        t('validation.minLength', { min: 2 }), 
        minLength(2)
      ),
      maxLength: helpers.withMessage(
        t('validation.maxLength', { max: 50 }), 
        maxLength(50)
      )
    },
    email: { 
      required: helpers.withMessage(t('validation.required'), required),
      email: helpers.withMessage(t('validation.email'), email),
      maxLength: helpers.withMessage(
        t('validation.maxLength', { max: 100 }), 
        maxLength(100)
      )
    },
    message: { 
      required: helpers.withMessage(t('validation.required'), required),
      minLength: helpers.withMessage(
        t('validation.minLength', { min: 10 }), 
        minLength(10)
      ),
      maxLength: helpers.withMessage(
        t('validation.maxLength', { max: 1000 }), 
        maxLength(1000)
      )
    },
    captcha: {
      required: helpers.withMessage(t('validation.required'), required),
      correctAnswer: helpers.withMessage(
        t('validation.captcha'),
        value => parseInt(value) === captcha.value.answer
      )
    }
  }
}))

const v$ = useVuelidate(rules, { form })

// Отправка формы
const submitForm = async () => {
  // Проверяем валидацию
  const isValid = await v$.value.$validate()
  if (!isValid) return

  try {
    isSubmitting.value = true
    
    // Добавляем задержку для демонстрации
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Здесь должен быть ваш код отправки формы на сервер
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(form.value)
    // })
    
    // if (!response.ok) throw new Error('Network response was not ok')

    // Очищаем форму
    form.value = {
      name: '',
      email: '',
      message: '',
      captcha: ''
    }
    v$.value.$reset()
    captcha.value = generateCaptcha()
    submitStatus.value = 'success'

  } catch (error) {
    console.error('Submission error:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // Очищаем статус через 5 секунд
    setTimeout(() => {
      submitStatus.value = ''
    }, 5000)
  }
}
</script>