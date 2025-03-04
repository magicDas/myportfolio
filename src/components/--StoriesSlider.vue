<template>
    <div class="stories-slider">
        <div class="stories-header">
            <h2 class="stories-title">Почни з наших кращих історій</h2>
            <div class="nav-buttons">
                <!--button class="nav-btn prev" @click="prevSlide" :disabled="currentSlide === 0">←</!--button>
                <button class="nav-btn next" @click="nextSlide" :disabled="currentSlide === maxSlide">→</button-->
                    <button class="nav-btn prev" @click="prevSlide">←</button>
                    <button class="nav-btn next" @click="nextSlide">→</button>    
            </div>
        </div>
      
        <div 
            class="slider-container"
            @mousedown="dragStart"
            @mousemove="drag"
            @mouseup="dragEnd"
            @mouseleave="dragEnd"
            @touchstart="dragStart"
            @touchmove="drag"
            @touchend="dragEnd"
        >         
            <div 
                class="slides-track" 
                :style="{ 
                transform: `translateX(${-currentPosition}px)`,
                transition: isDragging ? 'none' : 'transform 0.5s ease'
                }"
            >
            
                <div v-for="slide in lastSlides" :key="`last-${slide.id}`" class="slide">
                    <div class="story-card">
                        <div class="story-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1642132652798-ae887edb9e9d" alt="iPhone 16 Pro" class="story-image">
                        <div class="author-badge">
                            <img src="" alt="Author" class="author-avatar">
                        </div>
                        </div>
                        <div class="story-content">
                        <div class="tags">
                            <span class="tag">Натхнення</span>
                        </div>
                        <h3>Виграй iPhone 16 Pro та круті сертифікати!</h3>
                        <p>Мрієш про новенький iPhone 16 Pro або хочеш прокачати свої навички з допомогою навчальних курсів? Тоді цей потужний конкурс для тебе!</p>
                        </div>
                    </div>
                </div>

                <!-- Слайд 2 -->
                <div v-for="slide in lastSlides" :key="`last-${slide.id}`" class="slide">
                    <div class="story-card">
                        <div class="story-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1642132652798-ae887edb9e9d" alt="Pleex" class="story-image">
                        <div class="author-badge">
                            <img src="" alt="Author" class="author-avatar">
                        </div>
                        </div>
                        <div class="story-content">
                        <div class="tags">
                            <span class="tag">Натхнення</span>
                            <span class="tag">Інструменти</span>
                        </div>
                        <h3>Pleex — українська соціальна мережа на основі спільнот</h3>
                        <p>Соціальна мережа створена українцями для українців</p>
                        </div>
                    </div>
                </div>
        
                <!-- Слайд 3 -->
                <div v-for="slide in lastSlides" :key="`last-${slide.id}`" class="slide">
                    <div class="story-card">
                        <div class="story-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1642132652798-ae887edb9e9d" alt="Pleex" class="story-image">
                        <div class="author-badge">
                            <img src="" alt="Author" class="author-avatar">
                        </div>
                        </div>
                        <div class="story-content">
                        <div class="tags">
                            <span class="tag">Натхнення</span>
                            <span class="tag">Інструменти</span>
                        </div>
                        <h3>Pleex — українська соціальна мережа на основі спільнот</h3>
                        <p>Соціальна мережа створена українцями для українців</p>
                        </div>
                    </div>
                </div>

                <!-- Слайд 4 -->
                <div v-for="slide in lastSlides" :key="`last-${slide.id}`" class="slide">
                    <div class="story-card">
                        <div class="story-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1642132652798-ae887edb9e9d" alt="Pleex" class="story-image">
                        <div class="author-badge">
                            <img src="" alt="Author" class="author-avatar">
                        </div>
                        </div>
                        <div class="story-content">
                        <div class="tags">
                            <span class="tag">Натхнення</span>
                            <span class="tag">Інструменти</span>
                        </div>
                        <h3>Pleex — українська соціальна мережа на основі спільнот</h3>
                        <p>Соціальна мережа створена українцями для українців</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'

const slides = ref([
  { id: 1, title: 'Слайд 1' },
  { id: 2, title: 'Слайд 2' },
  { id: 3, title: 'Слайд 3' },
  { id: 4, title: 'Слайд 4' }
])

const slidesPerView = 3.3
const slideWidth = ref(0)
const currentPosition = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)

const dragStart = (e) => {
  isDragging.value = true
  startX.value = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX
  scrollLeft.value = currentPosition.value
  
  // Отключаем выделение текста при перетаскивании
  document.body.style.userSelect = 'none'
}

const drag = (e) => {
  if (!isDragging.value) return
  
  e.preventDefault()
  const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX
  const distance = startX.value - x
  currentPosition.value = scrollLeft.value + distance
}

const dragEnd = () => {
  if (!isDragging.value) return
  
  isDragging.value = false
  document.body.style.userSelect = ''
  
  // Snap к ближайшему слайду
  const slideIndex = Math.round(currentPosition.value / slideWidth.value)
  goToSlide(slideIndex)
}


// Клонированные слайды для бесконечной прокрутки
const lastSlides = computed(() => slides.value.slice(-slidesPerView))
const firstSlides = computed(() => slides.value.slice(0, slidesPerView))

// Общее количество слайдов с учетом клонированных
const totalWidth = computed(() => slideWidth.value * (slides.value.length + 2 * slidesPerView))

const updateSlideWidth = () => {
  const container = document.querySelector('.slider-container')
  if (container) {
    slideWidth.value = container.offsetWidth / slidesPerView
  }
}

// Функции для свайпа на мобильных
const touchStart = (e) => {
  isDragging.value = true
  startX.value = e.touches[0].clientX
  currentX.value = currentPosition.value
}

const touchMove = (e) => {
  if (!isDragging.value) return
  
  const diff = startX.value - e.touches[0].clientX
  currentPosition.value = currentX.value + diff
  
  // Предотвращаем прокрутку страницы при свайпе
  e.preventDefault()
}

const touchEnd = () => {
  isDragging.value = false
  
  // Определяем ближайший слайд
  const slideIndex = Math.round(currentPosition.value / slideWidth.value)
  goToSlide(slideIndex)
}

const goToSlide = (index) => {
  let position = index * slideWidth.value
  
  // Бесконечная прокрутка
  if (position < slideWidth.value * slidesPerView) {
    position = slideWidth.value * (slides.value.length + slidesPerView)
  } else if (position > slideWidth.value * (slides.value.length + slidesPerView)) {
    position = slideWidth.value * slidesPerView
  }
  
  currentPosition.value = position
}

const nextSlide = () => {
  goToSlide(Math.round(currentPosition.value / slideWidth.value) + 1)
}

const prevSlide = () => {
  goToSlide(Math.round(currentPosition.value / slideWidth.value) - 1)
}

onMounted(() => {
  updateSlideWidth()
  window.addEventListener('resize', updateSlideWidth)
  
  // Устанавливаем начальную позицию
  currentPosition.value = slideWidth.value * slidesPerView
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSlideWidth)
})
  </script>
  
<style scoped>
  .stories-slider {
    /* max-width: 1200px; */
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px;
    padding-right: 0; /* Убираем правый padding для эффекта продолжения */
  position: relative;
  }
  .slider-container {
  position: relative;
  overflow: hidden; /* Скрываем контент слева */
  margin-left: -1px; /* Компенсируем border */
  cursor: grab;
}

.slider-container:active {
  cursor: grabbing;
}

/* Создаем маску для обрезки левой части */
.slider-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: #fff;
  z-index: 2;
}
.slides-track {
  display: flex;
  gap: 24px;
  padding-right: 40px; /* Добавляем отступ справа */
  will-change: transform;
}

.slide {
  flex: 0 0 calc(30% - 18px);
  min-width: 280px;
  user-select: none;
  -webkit-user-drag: none;
}
/* Убираем overflow: visible с контейнера слайдера */
.stories-slider {
  overflow: hidden;
}

/* Оставляем overflow: visible для контейнера со слайдами */
.slider-container {
  overflow-x: visible;
}
.story-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.story-card:hover {
  transform: translateY(-4px);
}
  .stories-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    }
  
.stories-title {
  font-size: 28px;
  font-weight: 600;
  color: #1A1A1A;
}

.nav-buttons {
  display: flex;
  gap: 12px;
}

.nav-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #E5E5E5;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: #F5F5F5;
}
  
.slides {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 24px;
  padding: 4px;
}  

.story-image-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}
  
.story-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
}

.author-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  
  .story-content {
    padding: 24px;
  }
  
  .tags {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }
  
  .tag {
  padding: 6px 12px;
  background: #F5F5F5;
  border-radius: 16px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1A1A1A;
  margin-bottom: 12px;
  line-height: 1.4;
}

p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
} 
  

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 1024px) {
  .slide {
    flex: 0 0 calc(45% - 12px);
}
.stories-slider {
    padding-right: 20px;
  }
}
@media (max-width: 768px) {
  .slide {
    flex: 0 0 calc(90% - 12px); 
  }
  /* .slider-container {
    overflow: visible;
  } */
  .stories-slider {
    padding: 20px;
    padding-right: 0;
  }

  /* .stories-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  } */
}
  </style>