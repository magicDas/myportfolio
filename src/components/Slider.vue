<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="min-w-full">
        <img :src="slide" class="w-full h-48 sm:h-64 md:h-96 object-cover" />
      </div>
    </div>
    <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">&#10094;</button>
    <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">&#10095;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        'https://via.placeholder.com/800x400',
        'https://via.placeholder.com/800x400/ff0000',
        'https://via.placeholder.com/800x400/00ff00',
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>