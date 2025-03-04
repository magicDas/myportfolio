<template>
  <div class="min-h-screen font-playfair">
    <router-view></router-view>
  </div>
</template>

<style>
body {
  @apply font-playfair text-lg font-medium;
  /* @apply font-crimson text-lg; */
}

h1 {
  @apply font-cinzel font-bold text-shadow-magical-lg tracking-wider;
}

h2, h3, h4 {
  @apply font-philosopher font-semibold tracking-wide;
}

p, .magical-text {
  @apply font-cinzel tracking-wider text-shadow-magical;
}
.magical-button {
  @apply relative px-6 py-2 font-bold font-cinzel
         text-white rounded-lg
         bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600
         bg-[length:200%_100%] animate-gradient
         transition-all duration-300
         hover:scale-105 hover:shadow-lg
         before:absolute before:inset-0
         before:bg-gradient-to-r before:from-purple-400/20 before:via-fuchsia-300/20 before:to-purple-400/20
         before:animate-gradient before:rounded-lg;
  animation: buttonGlow 2s ease-in-out infinite;
}

@keyframes buttonGlow {
  0%, 100% {
    box-shadow: 0 0 15px rgba(233, 213, 255, 0.5),
                inset 0 0 15px rgba(233, 213, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 30px rgba(233, 213, 255, 0.8),
                inset 0 0 20px rgba(233, 213, 255, 0.8);
  }
}
@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(233, 213, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(233, 213, 255, 0.8),
                 0 0 30px rgba(233, 213, 255, 0.5);
  }
}

@keyframes activeGlow {
  0%, 100% {
    text-shadow: 0 0 15px rgba(233, 213, 255, 0.7),
                 0 0 25px rgba(233, 213, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 25px rgba(233, 213, 255, 0.9),
                 0 0 35px rgba(233, 213, 255, 0.7),
                 0 0 45px rgba(233, 213, 255, 0.5);
  }
}
</style>