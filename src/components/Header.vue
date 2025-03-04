<template>
  <!--header class="bg-purple-900 text-white py-4 dark:bg-gray-900"-->
  <header class="text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!--<router-link to="/" class="text-2xl font-bold">MagicDas</router-link>-->
      <div class="flex items-center space-x-4">
        <AnimatedLogo :size="48" class="hover:scale-110 transition-transform" />
        <!--<span class="text-xl font-bold">MagicDas</span>-->
      </div>
      <nav class="hidden md:flex space-x-6">
        <router-link
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"          
          class="relative px-3 py-1 text-lg font-medium font-cinzel tracking-wider
                 transition-colors duration-300 ease-out
                 hover:text-purple-200
                 before:absolute before:bottom-[2px] before:left-1/2 before:-translate-x-1/2
                 before:w-0 before:h-0.5 before:bg-purple-200
                 before:transition-[width] before:duration-300 before:ease-out
                 hover:before:w-full
                 after:absolute after:bottom-[2px] after:left-1/2 after:-translate-x-1/2
                 after:w-0 after:h-0.5 after:bg-purple-200/50
                 after:transition-[width] after:duration-300 after:ease-out
                 hover:after:w-[70%]
                 nav-link"
        >
          {{ $t(`navigation.${item.name}`) }}
        </router-link>
      </nav>
      <div class="flex items-center space-x-4">
        <!-- Theme Switcher -->
        <button
          @click="toggleTheme"
          class="p-2 rounded-full hover:bg-purple-900 dark:hover:bg-gray-600"
        >
          <sun-icon v-if="isDark" class="h-5 w-5 text-white" />
          <moon-icon v-else class="h-5 w-5 text-gray-100" />
        </button>
        <!-- Mobile menu button -->
        <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <!-- Language Switcher -->
        <button @click="changeLanguage" class="text-white hover:text-purple-300">
          {{ currentLanguage === 'ru' ? 'EN' : 'RU' }}
        </button>
      </div>
    </div>
    <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="md:hidden mt-4">
      <router-link to="/" class="block py-2 px-4 hover:bg-purple-800">{{ $t('welcome') }}</router-link>
      <router-link to="/about" class="block py-2 px-4 hover:bg-purple-800">{{ $t('about') }}</router-link>
      <router-link to="/projects" class="block py-2 px-4 hover:bg-purple-800">{{ $t('projects') }}</router-link>
      <router-link to="/contact" class="block py-2 px-4 hover:bg-purple-800">{{ $t('contact') }}</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline/index.js'
import AnimatedLogo from '@/components/AnimatedLogo.vue'

  const { locale } = useI18n()
  const isMenuOpen = ref(false)
  const isDark = ref(false)

  const navigationItems = [
    { name: 'home', path: '/' },
    { name: 'projects', path: '/projects' },
    { name: 'about', path: '/about' },
    { name: 'history', path: '/history' },
    { name: 'contact', path: '/contact' },
  ]
  
  const currentLanguage = computed(() => locale.value)
  const changeLanguage = () => {
    locale.value = currentLanguage.value === 'ru' ? 'en' : 'ru'
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  onMounted(() => {
    isDark.value = document.documentElement.classList.contains('dark')
  })

</script>

<style scoped>
.nav-link.router-link-active {
  @apply text-purple-200 text-shadow-magical;
}

.nav-link.router-link-active::before {
  @apply w-full;
}

.nav-link.router-link-active::after {
  @apply w-[70%];
}

.nav-link.router-link-active::before,
.nav-link.router-link-active::after {
  transition: none;
}

.nav-link:hover::before,
.nav-link:hover::after {
  transition: width 0.3s ease-out;
}

</style>