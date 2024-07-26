<template>
  <footer class="mt-6">
    <div class="bg-green-950 py-6 px-14 text-center text-white">
      <div class="container mx-auto text-center">
        <div class="mb-10">
          <h1 class="text-2xl font-bold">NatureNews</h1>
        </div>

        <div class="mb-6 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" class="text-gray-400 hover:text-white">
            <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <i class="fab fa-facebook-f text-xl"></i>
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-white">
            <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <i class="fab fa-twitter text-xl"></i>
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" class="text-gray-400 hover:text-white">
            <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <i class="fab fa-instagram text-xl"></i>
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-white">
          <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <i class="fab fa-linkedin-in text-xl"></i>
          </div>
        </a>
        <a href="https://tiktok.com" target="_blank" class="text-gray-400 hover:text-white">
          <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <i class="fab fa-tiktok text-xl"></i>
          </div>
        </a>
        </div>

        <div>
          <ul class="flex justify-center space-x-4">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-white">Beranda</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-400 hover:text-white">Tentang</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-gray-400 hover:text-white">Kontak</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-gray-400 hover:text-white">Karir</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-black px-14 py-4 text-center text-white">
      <small>Copyright &copy; 2024 NatureNews.</small>
    </div>
  </footer>
</template>