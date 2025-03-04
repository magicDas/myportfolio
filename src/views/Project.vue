<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'

const route = useRoute()
const project = ref(null)

// Данные проектов (позже можно вынести в отдельный файл)
const projects = [
  {
    id: '1', // Изменено на строку
    name: 'Проект 1',
    description: 'Описание проекта 1.',
    image: 'https://via.placeholder.com/400',
  },
  {
    id: '2', // Изменено на строку
    name: 'Проект 2',
    description: 'Описание проекта 2.',
    image: 'https://via.placeholder.com/400',
  },
]

// Изменяем поиск проекта
project.value = projects.find(p => p.id === route.params.id)

onMounted(() => {
  gsap.from('.content', {
    // opacity: 0,
    y: 50,
    duration: 1,
  })
})
</script>

<template>
  <div class="content">
    <div v-if="project" class="text-center text-white">
      <h1 class="text-4xl font-bold mb-8">{{ project.name }}</h1>
      <img 
        :src="project.image" 
        :alt="project.name" 
        class="w-full h-96 object-cover mb-8" 
      />
      <p class="text-lg">{{ project.description }}</p>
    </div>
    <div v-else class="text-center text-white">
      <p>Проект не найден.</p>
    </div>
  </div>
</template>