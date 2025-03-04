<template>
      <div class="bc-clider-circle">
        <div class="bc-slider-container loaded">
            <div class="bc-slider">
                <div class="bc-slide">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&q=80" alt="Природа 1">
                </div>
                <div class="bc-slide">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500&q=80" alt="Природа 2">
                </div>
                <div class="bc-slide">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&q=80" alt="Природа 3">
                </div>
                <div class="bc-slide">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&q=80" alt="Природа 4">
                </div>
                <div class="bc-slide">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80" alt="Природа 5">
                </div>
                <div class="bc-slide">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80" alt="Природа 6">
                </div>
                <div class="bc-slide">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80" alt="Природа 7">
                </div>
            </div>
            <button class="bc-prev">❮</button>
            <button class="bc-next">❯</button>
        </div>
      </div>
</template>
  
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  console.log('StoriesSlider mounted');
  const container = document.querySelector('.bc-slider-container');
  const slider = document.querySelector('.bc-slider');
  const slides = document.querySelectorAll('.bc-slide');
  const prevBtn = document.querySelector('.bc-prev');
  const nextBtn = document.querySelector('.bc-next');
  
  console.log('Elements found:', {
    container: !!container,
    slider: !!slider,
    slidesCount: slides.length
  });
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let loadedImages = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  
  // Check if all images are loaded
  function checkAllImagesLoaded() {
      loadedImages++;
      if (loadedImages === slides.length) {
          // All images are loaded
          container.classList.add('loaded');
          updateSlider();
      }
  }
  
  // Preload all images
  slides.forEach(slide => {
      const img = slide.querySelector('img');
      if (img.complete) {
          checkAllImagesLoaded();
      } else {
          img.onload = checkAllImagesLoaded;
          img.onerror = checkAllImagesLoaded; // Handle loading errors
      }
  });

  // Add swipe support for touch devices
  slider.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
  }, { passive: true });
  
  slider.addEventListener('touchmove', (e) => {
      touchEndX = e.touches[0].clientX;
  }, { passive: true });
  
  slider.addEventListener('touchend', () => {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
          if (swipeDistance > 0) {
              // Swipe right
              currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          } else {
              // Swipe left
              currentIndex = (currentIndex + 1) % totalSlides;
          }
          updateSlider();
      }
  });

  function updateSlider() {
      console.log('Updating slider...');
      
      const radius = 600; // Radius for slide positioning
      const angle = 45; // Angle between slides
      const centerZ = -200; // Z-position for center slide
      const sideZ = -100; // Z-position for side slides
      
      // Check for transform3d support
      const has3d = (function() {
          if (!window.getComputedStyle) {
              return false;
          }

          const el = document.createElement('div');
          document.body.appendChild(el);
          el.style.transform = 'translate3d(1px,1px,1px)';
          const has3d = window.getComputedStyle(el).getPropertyValue('transform');
          document.body.removeChild(el);

          return typeof has3d !== 'undefined' && has3d.length > 0 && has3d !== "none";
      }());

      slides.forEach((slide, index) => {
          console.log(`Updating slide ${index}`);
          let delta = index - currentIndex;
          
          // Handle circular transition
          if (delta > totalSlides / 2) delta -= totalSlides;
          if (delta < -totalSlides / 2) delta += totalSlides;
          
          // Calculate position and appearance
          let x = 0;
          let z = centerZ;
          let scale = 0.8;
          let opacity = 1;
          let rotation = 0;
          
          if (delta === 0) {
              // Center slide
              x = 0;
              z = centerZ;
              scale = 0.8;
              slide.classList.add('active');
              slide.classList.remove('side');
          } else if (delta === 1 || delta === -1) {
              // Side slides
              x = delta * 500; 
              z = sideZ;
              scale = 0.9;
              rotation = delta * -45;
              slide.classList.add('side');
              slide.classList.remove('active');
          } else {
              // Hidden slides
              x = delta * 1000;
              z = -1000;
              opacity = 0;
              slide.classList.remove('active', 'side');
          }
          
          // Apply transformations based on 3D support
          if (has3d) {
              slide.style.transform = `
                  translate(-50%, -50%)
                  translateX(${x}px)
                  translateZ(${z}px)
                  rotateY(${rotation}deg)
                  scale(${scale})
              `;
          } else {
              // Fallback for browsers without 3D support
              slide.style.transform = `
                  translate(-50%, -50%)
                  translateX(${x}px)
                  scale(${scale})
              `;
          }
          
          // Set z-index and opacity
          slide.style.zIndex = Math.abs(delta) === 1 ? 2 : (delta === 0 ? 1 : 0);
          slide.style.opacity = opacity;
      });

      // Force update transform-style after changes
      requestAnimationFrame(() => {
          slider.style.transformStyle = 'preserve-3d';
          slider.style.webkitTransformStyle = 'preserve-3d';
      });
  }
  
  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
  });
  
  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
  });
  
  // Add keyboard support
  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updateSlider();
      } else if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateSlider();
      }
  });
  
  // Initialize 3D properties on load
  container.style.perspective = '1400px';
  container.style.webkitPerspective = '1400px';
  slider.style.transformStyle = 'preserve-3d';
  slider.style.webkitTransformStyle = 'preserve-3d';
  
  // First update
  updateSlider();
});
</script>
  
<style scoped>
.bc-clider-circle {
  overflow: hidden;
  transform-style: preserve-3d; 
  -webkit-transform-style: preserve-3d; 
  min-height: 500px; 
  width: 100%; 
  position: relative;
}
.bc-slider-container {
    position: relative;
    width: 100%;
    height: 500px;
    margin: 50px auto;
    perspective: 1400px !important;
    -webkit-perspective: 1400px !important;
    transform-style: preserve-3d !important;
    -webkit-transform-style: preserve-3d !important;
    overflow: visible;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.bc-slider-container.loaded {
    opacity: 1;
    visibility: visible;
}

.bc-slider {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d !important;
    -webkit-transform-style: preserve-3d !important;
}

.bc-slide {
    position: absolute;
    width: 500px;
    height: 350px;
    left: 50%;
    top: 50%;
    transform-origin: center center;
    -webkit-transform-origin: center center;
    transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
    -webkit-transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    will-change: transform;
}

.bc-slide.active {
    pointer-events: auto;
    cursor: pointer;
}
.bc-slide.active:hover img{
    transform: scale(1.5);
}

.bc-slide.side {
    pointer-events: auto;
}

.bc-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(255,255,255,0.3);
    user-select: none;
    -webkit-user-select: none;
    transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
    -webkit-transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.bc-prev, .bc-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    font-size: 24px;
    z-index: 100;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.bc-prev {
    left: 15%;
}

.bc-next {
    right: 15%;
}

.bc-prev:hover, .bc-next:hover {
    transform: translateY(-50%) scale(1.3);
}

/* Adaptive styles for different screens */
@media (max-width: 1200px) {
    .bc-slide {
        width: 400px;
        height: 280px;
    }
}

@media (max-width: 992px) {
    .bc-slide {
        width: 350px;
        height: 245px;
    }
    
    .bc-prev {
        left: 10%;
    }
    
    .bc-next {
        right: 10%;
    }
}

@media (max-width: 768px) {
    .bc-slider-container {
        height: 400px;
        perspective: 1000px;
        -webkit-perspective: 1000px;
    }
    
    .bc-slide {
        width: 300px;
        height: 210px;
    }
    
    .bc-prev, .bc-next {
        padding: 12px 16px;
        font-size: 20px;
    }
}

@media (max-width: 576px) {
    .bc-slider-container {
        height: 350px;
        margin: 30px auto;
    }
    
    .bc-slide {
        width: 250px;
        height: 175px;
    }
    
    .bc-prev {
        left: 5%;
    }
    
    .bc-next {
        right: 5%;
    }
}

/* Touch device support */
@media (hover: none) {
    .bc-prev, .bc-next {
        background: rgba(255, 255, 255, 0.9);
    }
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
    .bc-prev, .bc-next {
        background: rgba(50, 50, 50, 0.2);
        color: white;
    }
}

</style>