<template>
  <div class="my-8">
    <h2 class="text-2xl font-bold text-center mb-4">Top Products</h2>
    <div class="relative overflow-hidden">
      <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(product, index) in products" :key="product.id" class="min-w-full sm:min-w-1/2 md:min-w-1/3 lg:min-w-1/4 flex justify-center p-4">
          <div @click="goToProduct(product.id)" class="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden w-64">
            <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold">{{ product.name }}</h3>
              <p class="text-gray-600">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">&#10094;</button>
      <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">&#10095;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      products: [
        { id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/300' },
        { id: 3, name: 'Product 3', price: '$39.99', image: 'https://via.placeholder.com/300' },
        { id: 4, name: 'Product 4', price: '$49.99', image: 'https://via.placeholder.com/300' },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
    },
    goToProduct(productId) {
      this.$router.push({ name: 'Product', params: { id: productId } });
    },
  },
};
</script>