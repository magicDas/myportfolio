<template>
  <!-- <footer class="text-white py-8 pb-2"> -->
  <footer class="mt-auto text-white py-4">
      <div class="container mx-auto px-4 flex justify-between">      
        <div class="flex justify-center space-x-4">
          <a v-for="(icon, name) in socialIcons"
           :key="name"
           :href="icon.url"
           :aria-label="name"
           target="_blank"
           class="social-icon-link relative group"
          >
            <svg class="w-6 h-6 transition-all duration-300
                      opacity-60 group-hover:opacity-100
                      fill-current"
                viewBox="0 0 496 496"
            >
              <path :d="icon.path"/>
            </svg>
            <span class="sr-only">{{ name }}</span>
          </a>
        </div>
        <p class="text-lg">
          <router-link to="/" class="text-2xl font-bold">MagicDas</router-link> &copy; {{ new Date().getFullYear() }} 
        </p>
      </div>
    
  </footer>
</template>
<script setup>
import { socialIcons } from '@/constants/socialIcons'
</script>

<style scoped>
.social-icon-link {
  @apply transition-all duration-300 ease-in-out;
  animation: iconGlow 2s ease-in-out infinite;
}

.social-icon-link:hover {
  @apply transform scale-110;
  animation: iconHoverGlow 1s ease-in-out infinite;
}

@keyframes iconGlow {
  0%, 100% {
    filter: drop-shadow(0 0 3px rgba(233, 213, 255, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 8px rgba(233, 213, 255, 0.8));
  }
}

@keyframes iconHoverGlow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(233, 213, 255, 0.8));
    transform: scale(1.1);
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(233, 213, 255, 1));
    transform: scale(1.15);
  }
}

.social-icon-link:hover svg {
  @apply text-purple-200;
}

.social-icon-link:hover::before {
  content: '';
  @apply absolute inset-0 rounded-full;
  background: radial-gradient(circle, rgba(233, 213, 255, 0.2) 0%, transparent 70%);
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}
</style>