<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap';

onMounted(() => {
  
  const flashlight = document.getElementById('flashlight')
  
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX
    const y = event.clientY
    
    flashlight.style.left = (x - 90) + 'px'
    flashlight.style.top = (y - 70) + 'px'
  })


  // Анимация логотипа
  gsap.from('.logo', {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5
  })

  // Анимация контента с задержкой
  gsap.from('.content', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    delay: 0.5
  })

  // Анимация кнопок
  gsap.from('.buttons', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1
  })

  // Анимация заголовков
  gsap.from('.fade-down', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power2.out'
  })

  // Анимация основного контента
  gsap.from('.fade-up', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  })

  // Анимация боковых элементов
  gsap.from('.fade-side', {
    opacity: 0,
    x: 30,
    duration: 0.8,
    delay: 0.4,
    ease: 'power2.out'
  })
})
</script>
