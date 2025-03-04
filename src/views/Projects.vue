<template>
  <div class="content">
    <h1 class="text-3xl font-bold text-center text-white dark:text-white mb-8">
      {{ $t('projects.title') }}
    </h1>

    <div class="relative overflow-hidden px-4">      
      <div class="flex transition-transform duration-500 ease-in-out gap-4" 
           :style="{ transform: `translateX(-${currentIndex * (100/3)}%)` }">
        <div v-for="(project, index) in projects" 
             :key="project.id" 
             class="min-w-[calc(33.333%-16px)] relative group">
          <div @click="goToProject(project.id)" 
               class="cursor-pointer bg-purple-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div class="relative overflow-hidden rounded-lg shadow-lg bg-purple-800">
                <img 
                  :src="project.image" 
                  :alt="$t(project.name)" 
                  class="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div class="p-6 py-1">
                  <h3 class="text-xl font-bold mb-2">{{ $t(project.name) }}</h3>
                </div>

                <div class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                  <h3 class="text-xl font-bold text-white mb-2">
                    {{ $t(project.name) }}
                  </h3>
                  <p class="text-gray-200 text-center mb-4">
                    {{ createShortDescription($t(project.description)) }}
                  </p>
                  <button 
                    @click="goToProject(project.id)"
                    class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg
                          transform transition-transform hover:scale-105"
                  >
                    {{ $t('projects.readMore') }}
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>

      
      <button @click="prevSlide" 
              class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 bg-opacity-50 text-white p-2 rounded-r"
              :disabled="currentIndex === 0">
        &#10094;
      </button>
      <button @click="nextSlide" 
              class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 bg-opacity-50 text-white p-2 rounded-l"
              :disabled="currentIndex === projects.length - 3">
        &#10095;
      </button>

      
      <div class="flex justify-center mt-4 gap-2">
        <button v-for="i in projects.length - 2" 
                :key="i" 
                @click="currentIndex = i - 1"
                class="w-2 h-2 rounded-full"
                :class="currentIndex === i - 1 ? 'bg-purple-600' : 'bg-gray-400'">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' 
import { gsap } from 'gsap'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentIndex = ref(0)

// Функция для создания краткого описания
const createShortDescription = (fullDescription) => {
  const words = fullDescription.split(' ')
  if (words.length <= 10) return fullDescription
  return words.slice(0, 10).join(' ') + '...'
}

const projects = ref([
  {
    id: 1,
    name: 'projects.project1.name',
    description: 'projects.project1.description',
    image: 'https://images.unsplash.com/photo-1642132652798-ae887edb9e9d',
  },
  {
    id: 2,
    name: 'projects.project2.name',
    description: 'projects.project2.description',
    image: 'https://images.unsplash.com/photo-1548524238-a971a4a3b523',
  },
  {
    id: 3,
    name: 'projects.project3.name',
    description: 'projects.project3.description',
    image: 'https://images.unsplash.com/photo-1642132652860-471b4228023e',
  },
  {
    id: 4,
    name: 'projects.project4.name',
    description: 'projects.project4.description',
    image: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30',
  },
])

const nextSlide = () => {
  if (currentIndex.value < projects.value.length - 3) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToProject = (projectId) => {
  router.push({ name: 'Project', params: { id: projectId } })
}

onMounted(() => {
  gsap.from('.flex.transition-transform', {
    opacity: 0,
    y: 50,
    duration: 1,
  })
})
</script>

<style scoped>
.group {
  perspective: 1000px;
}

.group:hover .bg-purple-800 {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

button {
  @apply transition-all duration-300;
}

button:disabled {
  @apply opacity-50 cursor-not-allowed;
}

button:not(:disabled):hover {
  @apply opacity-80;
}

button:active:not(:disabled) {
  @apply transform scale-95;
}

.rounded-full {
  @apply shadow-sm;
}

.bg-purple-600 {
  @apply shadow-md;
}
</style> 




