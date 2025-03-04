<template>
    <div class="container mx-auto flex-grow flex flex-col justify-center items-center">
        <h1 class="text-center text-2xl font-bold">{{ $t('history.title') }}</h1>
        <StoriesSlider />
    </div>
    
  </template>
  
  <script setup>
  import StoriesSlider from '@/components/StoriesSlider.vue'
  </script>