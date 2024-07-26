<template>
  <nav class="bg-white p-4 sticky top-0 z-50 shadow-lg px-14">
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-green-800 text-2xl font-bold">
        <NuxtLink to="/">
          NatureNews
        </NuxtLink>
      </div>
      <div class="hidden md:flex space-x-10">
        <NuxtLink to="/" exact-active-class="text-green-700 font-medium" class="text-gray-600 hover:text-green-500 font-medium">
          <div>Beranda</div>
        </NuxtLink>
        <NuxtLink to="/about" exact-active-class="text-green-700 font-medium" class="text-gray-600 hover:text-green-500 font-medium">
          <div>Tentang</div>
        </NuxtLink>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-600 hover:text-black">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden md:mt-0 mt-4">
      <NuxtLink to="/">
        <div class="block py-2 text-gray-600 hover:text-black">Beranda</div>
      </NuxtLink>
      <NuxtLink to="/about">
        <div class="block py-2 text-gray-600 hover:text-black">Tentang</div>
      </NuxtLink>
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

