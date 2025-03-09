<template>
  <div class="content container mx-auto px-4">
    <h2 class="text-4xl font-heading mb-8 text-center">{{ $t('about.title') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      <div class="md:col-span-1">
        <div class="space-y-4">
          <p class="text-xl font-body">{{ $t('about.description.p1') }}</p>
          <p class="text-xl font-body">{{ $t('about.description.p2') }}</p>
          <p class="text-xl font-body">{{ $t('about.description.p3') }}</p>
        </div>
        <div class="mt-8">
          <h3 class="text-2xl font-heading mb-4">Навыки</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(skill, index) in skills"
              :key="skill"
              class="skill-tag text-xs"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              {{ skill }}
            </span>
          </div>
        </div>        
      </div>

     
      <div class="md:col-span-1">
        <div class="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="../assets/images/profile.png" 
            alt="Profile"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'Vue.js',
  'TailwindCSS',
  'Bootstrap',
  'JQuery',
  'Tailwind',
  'Shopware',
  'WordPress',
  'Joomla',
  'OpenCart',
  'Elementor',
  'Tilda'
]
</script>

<style scoped>
.skill-tag {
  @apply bg-purple-600 text-white px-4 py-1 rounded-full;
  animation: skill-glow 2s ease-in-out infinite;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.skill-tag:hover {
  @apply bg-purple-700;
  animation-play-state: paused;
}

@keyframes skill-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(147, 51, 234, 0.3);
    opacity: 0.8;
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
    opacity: 1;
  }
}
</style>
