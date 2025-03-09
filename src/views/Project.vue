<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'

const route = useRoute()
const { t } = useI18n()

const projects = computed(() => [
  {
    id: 1,
    name: t('projects.project1.name'),
    description: t('projects.project1.description'),
    image: '../src/assets/images/screens/project1.jpg',
    link: 'https://project1-link.com'
  },
  {
    id: 2,
    name: t('projects.project2.name'),
    description: t('projects.project2.description'),
    image: '../src/assets/images/screens/project2.jpg',
    link: 'https://garden-mat.de'
  },
  {
    id: 3,
    name: t('projects.project3.name'),
    description: t('projects.project3.description'),
    image: '../src/assets/images/screens/project3.jpg',
    link: 'https://project3-link.com'
  },
  {
    id: 4,
    name: t('projects.project4.name'),
    description: t('projects.project4.description'),
    image: '../src/assets/images/screens/project4.jpg',
    link: 'https://project4-link.com'
  },
  {
    id: 5,
    name: t('projects.project5.name'),
    description: t('projects.project5.description'),
    image: '../src/assets/images/screens/project5.jpg',
    link: 'https://project5-link.com'
  },
  {
    id: 6,
    name: t('projects.project6.name'),
    description: t('projects.project6.description'),
    image: '../src/assets/images/screens/project6.jpg',
    link: 'https://project6-link.com'
  },
  {
    id: 7,
    name: t('projects.project7.name'),
    description: t('projects.project7.description'),
    image: '../src/assets/images/screens/project7.jpg',
    link: 'https://project7-link.com'
  },
  {
    id: 8,
    name: t('projects.project8.name'),
    description: t('projects.project8.description'),
    image: '../src/assets/images/screens/project8.jpg',
    link: 'https://project8-link.com'
  },
  {
    id: 9,
    name: t('projects.project9.name'),
    description: t('projects.project9.description'),
    image: '../src/assets/images/screens/project9.jpg',
    link: 'https://project9-link.com'
  },
  {
    id: 10,
    name: t('projects.project10.name'),
    description: t('projects.project10.description'),
    image: '../src/assets/images/screens/project10.jpg',
    link: 'https://project10-link.com'
  },
  {
    id: 11,
    name: t('projects.project11.name'),
    description: t('projects.project11.description'),
    image: '../src/assets/images/screens/project11.jpg',
    link: 'https://project11-link.com'
  }
])

const project = computed(() => 
  projects.value.find(p => p.id === parseInt(route.params.id))
)

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
    <div v-if="project" class="project-container">
      <div class="project-info">
        <h1 class="project-title font-heading">{{ project.name }}</h1>
        <p class="project-description font-body text-xl">{{ project.description }}</p>
        <p v-if="project.link" class="project-link text-xs font-body">
          {{ t('projects.viewLink') }}
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-xs">{{ project.link }}</a>
        </p>
      </div>
      <div class="project-image">
        <div class="image-container">
          <img 
            :src="project.image" 
            :alt="project.name" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div v-else class="text-center text-white">
      <p>{{ t('projects.noProjects') }}</p>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  color: white;
  max-width: 1400px;
  margin: 0 auto;
}

.project-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.project-description {
  font-size: 1.125rem;
  line-height: 1.7;
}

.project-image {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 100%;
  height: auto;
  animation: continuous-scroll 35s ease-in-out infinite;
}

.image-container:hover {
  animation-play-state: paused;
}

.project-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0.5rem;
}

@keyframes continuous-scroll {
  0% {
    transform: translateY(0);
  }
  45% {
    transform: translateY(calc(400px - 100%));
  }
  55% {
    transform: translateY(calc(400px - 100%));
  }
  100% {
    transform: translateY(0);
  }
}


@media (max-width: 1024px) {
  .project-container {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .project-title {
    font-size: 2rem;
  }
}


@media (max-width: 768px) {
  .project-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  .project-image {
    min-height: 300px;
    order: -1;
  }

  .project-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .project-info {
    text-align: center;
  }
}

/* support Safari and Firefox */
@supports (-webkit-appearance:none) {
  .project-image img {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

/* Поддержка старых версий Edge */
@supports (-ms-ime-align: auto) {
  .project-container {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr;
  }
}

/* Поддержка Internet Explorer */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .project-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .project-info,
  .project-image {
    flex: 1 1 45%;
    margin: 1rem;
  }
}

/* Удаляем специальную анимацию для touch-устройств, 
   так как теперь используем одну анимацию для всех устройств */
@media (hover: none) {
  .image-container {
    animation: continuous-scroll 15s ease-in-out infinite;
  }
}

.project-link {
  margin-top: 1.5rem;
  font-size: 1.125rem;
}

.project-link a {
  color: #4CAF50;
  text-decoration: none;
  margin-left: 0.5rem;
  transition: color 0.3s ease;
}

.project-link a:hover {
  color: #8BC34A;
}
</style>