<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white text-lg font-bold">MySite</router-link>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="md:flex md:items-center">
        <router-link to="/" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4">Home</router-link>
        <router-link to="/about" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4">About</router-link>
        <router-link to="/contact" class="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>