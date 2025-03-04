<template>
  <div class="logo-container" 
       @mousemove="handleMouseMove" 
       @mouseleave="handleMouseLeave"
  >
    <svg 
      class="logo"
      :width="size * 2.5"
      :height="size * 2.5"
      viewBox="0 0 300 300"
      :style="logoStyle"
    >
      <!-- Фоновые элементы -->
      <circle 
        class="logo-glow"
        cx="150"
        cy="150"
        r="138"
        fill="none"
      />
      
      <!-- Основной круг -->
      <circle 
        class="logo-circle"
        cx="150"
        cy="150"
        r="125"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
      />

      <!-- Волны -->
      <circle
        v-for="(wave, index) in 3"
        :key="wave"
        class="logo-wave"
        cx="150"
        cy="150"
        :r="100 + index * 20"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        :style="{ animationDelay: `${index * 0.5}s` }"
      />

      <!-- Основной путь (можно заменить на ваш) -->
      <path
      class="logo-path"
      d="M80 90
           L80 210
           L115 150
           L150 210
           L150 90
           L150 210
           C150 210, 220 210, 220 150
           C220 90, 150 90, 150 90
           Z"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <!-- Частицы -->
      <circle
        v-for="particle in particles"
        :key="particle.id"
        class="logo-particle"
        :cx="particle.x * 2.5"
        :cy="particle.y * 2.5"
        :r="particle.size * 2.5"
        fill="currentColor"
        :style="particle.style"
      />

      <!-- Интерактивный курсор -->
      <circle
        class="logo-cursor"
        :cx="cursorPos.x * 2.5"
        :cy="cursorPos.y * 2.5"
        r="10"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Props
const props = defineProps({
  size: {
    type: Number,
    default: 300
  }
})

// Cursor position
const cursorPos = ref({ x: 150, y: 150 })
const rotation = ref(0)
const isHovered = ref(false)

// Particles system
const particles = ref([])
const particleCount = 12

// Create particles
const createParticles = () => {
  particles.value = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: 150,
    y: 150,
    size: Math.random() * 4 + 2.5,
    angle: (Math.PI * 2 * i) / particleCount,
    speed: Math.random() * 0.5 + 0.5,
    style: {
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: `${Math.random() * 2 + 2}s`,
      animationDelay: `${Math.random() * 2}s`
    }
  }))
}

// Logo transform style
const logoStyle = computed(() => ({
  transform: `rotate(${rotation.value}deg)`,
  transition: 'transform 0.3s ease-out'
}))

// Mouse handlers
const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  cursorPos.value = {
    x: (x / rect.width) * 300,
    y: (y / rect.height) * 300
  }
  
  rotation.value = Math.atan2(
    y - rect.height / 2,
    x - rect.width / 2
  ) * (180 / Math.PI)
  
  isHovered.value = true
}

const handleMouseLeave = () => {
  rotation.value = 0
  cursorPos.value = { x: 150, y: 150 }
  isHovered.value = false
}

// Lifecycle
onMounted(() => {
  createParticles()
})
</script>

<style scoped>
.logo-container {
  @apply relative inline-block;
}

.logo {
  @apply text-purple-500 transition-all duration-300;
}

.logo-glow {
  @apply opacity-0;
  filter: blur(8px);
  animation: glow 3s ease-in-out infinite;
}

.logo-circle {
  animation: rotate 10s linear infinite;
  transform-origin: center;
}

.logo-wave {
  animation: wave 3s ease-in-out infinite;
  opacity: 0.3;
}

.logo-path {
  animation: draw 2s ease-out forwards;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
}

.logo-particle {
  animation: float 3s ease-in-out infinite;
}

.logo-cursor {
  transition: all 0.2s ease-out;
  filter: blur(1px);
}

@keyframes glow {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes wave {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.2;
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(
      calc(cos(var(--angle)) * 10px),
      calc(sin(var(--angle)) * 10px)
    );
  }
}

/* Hover states */
.logo:hover {
  @apply text-purple-400;
}

.logo:hover .logo-glow {
  @apply opacity-30;
}

.logo:hover .logo-circle {
  animation-duration: 5s;
}

.logo:hover .logo-wave {
  animation-duration: 2s;
}

.logo:hover .logo-particle {
  animation-duration: 2s;
}
</style> 