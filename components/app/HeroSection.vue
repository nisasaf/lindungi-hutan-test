<template>
  <section class="relative h-screen bg-cover bg-center bg-img">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative flex items-center justify-center h-full text-center text-white px-10">
      <div class="px-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Wawasan Alam dari Seluruh Dunia</h1>
        <p class="text-lg md:text-xl mb-10 md:leading-8">Temukan berbagai macam informasi tentang lingkungan alam, fenomena alam, dan ekosistem melalui ragam artikel terkini di NewsNature.</p>
        <NuxtLink to="#article-section" class="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition">
          Telusuri
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      required: true
    },
    subheadline: {
      type: String,
      required: true
    },
    ctaText: {
      type: String,
      required: true
    },
    backgroundImage: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
  .bg-img {
    background-image: url('/assets/img/main-banner.jpg');
  }
</style>
