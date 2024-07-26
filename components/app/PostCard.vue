<template>
  <div class="w-full rounded overflow-hidden shadow-lg bg-white my-2">
    <div class="h-36 w-full bg-blue-400 rounded-t bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <img :src="urlToImage" alt="Image" class="object-cover h-full w-full rounded-t" />
    </div>
    <div class="px-6 py-4 bg-white">
      <div class="text-black font-bold text-xl mb-2 line-clamp-2">{{ title }}</div>
      <p class="text-gray-700 text-base line-clamp-2">
        {{ description }}
      </p>
      <p class="text-gray-500 text-sm mt-2">{{ author }} - {{ new Date(publishedAt).toLocaleDateString() }}</p>
      <a :href="url" target="_blank" class="text-blue-500 hover:underline mt-2 inline-block">Selengkapnya</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      urlToImage: {
        type: String,
        required: false
      },
      url: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: false
      },
      publishedAt: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
