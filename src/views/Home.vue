<template>

    <div class="container mx-auto flex-grow flex flex-col justify-center items-center">
     
      <div class="flex justify-center logo"></div>

      <div class="flex justify-center items-center delay-400 content">
        
        <div class="mt-8 grow-3">
          <h1 class="text-center text-2xl font-bold">{{ $t('home.title') }}</h1>
          <h4 class="text-center text-xl font-bold mb-10">{{ $t('home.subtitle') }}</h4>
          <div class="custom-scrollbar overflow-y-auto h-[calc(50vh-200px)] px-4">
            <div class="space-y-4">
              <p class="mt-2 indent-8">{{ $t('home.contentmain.p1') }}</p>
              <p class="mt-2 indent-8">{{ $t('home.contentmain.p2') }}</p>
              <p class="mt-2 indent-8">{{ $t('home.contentmain.p3') }}</p>
              <p class="mt-2 indent-8">{{ $t('home.contentmain.p4') }}</p>
              <p class="mt-2 indent-8">{{ $t('home.contentmain.p5') }}</p>
            </div>
          </div>
        </div>
        <div class="p-4 grow-7">
          <svg version="1.1" width="320" height="320" viewBox="0 0 320 320" fill="none" stroke="#fff" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <path id="r1">
              <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin"/>
            </path>
            <path id="r2">
              <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>
              <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>
            </path>
            <path id="r3">
              <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>
              <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>
            </path>
            <path id="r4">
              <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>
              <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>
            </path>
            <path id="r5">
              <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>
              <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>
            </path>
            <path id="r6">
              <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>
              <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>
            </path>
          </defs>
          <use xlink:href="#r1"/>
          <use xlink:href="#r1" transform="rotate(60 160 160)"/>
          <use xlink:href="#r1" transform="rotate(120 160 160)"/>
          <use xlink:href="#r1" transform="rotate(180 160 160)"/>
          <use xlink:href="#r1" transform="rotate(240 160 160)"/>
          <use xlink:href="#r1" transform="rotate(300 160 160)"/>
          <use xlink:href="#r2" transform="rotate(30 160 160)"/>
          <use xlink:href="#r2" transform="rotate(90 160 160)"/>
          <use xlink:href="#r2" transform="rotate(150 160 160)"/>
          <use xlink:href="#r2" transform="rotate(210 160 160)"/>
          <use xlink:href="#r2" transform="rotate(270 160 160)"/>
          <use xlink:href="#r2" transform="rotate(330 160 160)"/>
          <use xlink:href="#r3"/>
          <use xlink:href="#r3" transform="rotate(60 160 160)"/>
          <use xlink:href="#r3" transform="rotate(120 160 160)"/>
          <use xlink:href="#r3" transform="rotate(180 160 160)"/>
          <use xlink:href="#r3" transform="rotate(240 160 160)"/>
          <use xlink:href="#r3" transform="rotate(300 160 160)"/>
          <use xlink:href="#r4" transform="rotate(30 160 160)"/>
          <use xlink:href="#r4" transform="rotate(90 160 160)"/>
          <use xlink:href="#r4" transform="rotate(150 160 160)"/>
          <use xlink:href="#r4" transform="rotate(210 160 160)"/>
          <use xlink:href="#r4" transform="rotate(270 160 160)"/>
          <use xlink:href="#r4" transform="rotate(330 160 160)"/>
          <use xlink:href="#r5"/>
          <use xlink:href="#r5" transform="rotate(60 160 160)"/>
          <use xlink:href="#r5" transform="rotate(120 160 160)"/>
          <use xlink:href="#r5" transform="rotate(180 160 160)"/>
          <use xlink:href="#r5" transform="rotate(240 160 160)"/>
          <use xlink:href="#r5" transform="rotate(300 160 160)"/>
          <use xlink:href="#r6" transform="rotate(30 160 160)"/>
          <use xlink:href="#r6" transform="rotate(90 160 160)"/>
          <use xlink:href="#r6" transform="rotate(150 160 160)"/>
          <use xlink:href="#r6" transform="rotate(210 160 160)"/>
          <use xlink:href="#r6" transform="rotate(270 160 160)"/>
          <use xlink:href="#r6" transform="rotate(330 160 160)"/>
        </svg>
        </div>
      </div>
      <!--
      <div class="flex justify-center mt-12 space-x-4 delay-400 buttons">
        <router-link
          to="/about"
          class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg magical-button"
        >
          {{ $t('navigation.about') }}
        </router-link>
        <router-link
          to="/projects"
          class="bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg magical-button"
        >
          {{ $t('navigation.projects') }}
        </router-link>
      </div>
      -->
    </div> 
     
</template>

<script setup>
// import StoriesSlider from '@/components/StoriesSlider.vue'
</script>