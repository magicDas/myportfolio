<template>
  
    <div class="content container mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center">{{ $t('about.title') }}</h2>
      <div class="max-w-2xl mx-auto">
        <p class="text-lg mb-4">{{ $t('about.description.p1') }}</p>
        <p class="text-lg mb-4">{{ $t('about.description.p2') }}</p>
        <p class="text-lg mb-4">{{ $t('about.description.p3') }}</p>
        <div class="mt-8">
          <h3 class="text-2xl font-bold mb-4">Навыки</h3>
          <div class="flex flex-wrap gap-2">
            <span class="bg-purple-600 text-white px-4 py-2 rounded-full magical-button">HTML</span>
            <span class="bg-purple-600 text-white px-4 py-2 rounded-full magical-button">CSS</span>
            <span class="bg-purple-600 text-white px-4 py-2 rounded-full magical-button">JavaScript</span>
            <span class="bg-purple-600 text-white px-4 py-2 rounded-full magical-button">Vue.js</span>
            <span class="bg-purple-600 text-white px-4 py-2 rounded-full magical-button">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  
</template>
