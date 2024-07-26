<template>
  <div>
    <AppHeroSection />
    <div class="container mx-auto px-10 py-4 my-10" id="article-section"> 
      <div v-if="loading" class="text-center">
        <img src="/assets/loader.gif" alt="Loading" class="mx-auto mb-2">
        <p>Loading...</p>
      </div>
      <div v-else>
        <div class="flex items-center mb-6">
          <h1 class="text-2xl font-bold flex-shrink-0 mr-4">Artikel Terkini</h1>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <div v-if="articles.length === 0" class="text-center">
          <p>No articles found.</p>
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <PostCard
            v-for="article in visibleArticles"
            :key="article.url"
            :author="article.author || 'Unknown'"
            :publishedAt="article.publishedAt || ''"
            :title="article.title || 'No Title'"
            :description="article.description || 'No Description'"
            :url="article.url || '#' "
            :urlToImage="article.urlToImage || ''"
          />
        </div>
        <div v-if="hasMore" class="text-center mt-4">
          <button @click="loadMore" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Artikel Lainnya
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchArticles from '~/services/articles';
import PostCard from '~/components/app/PostCard.vue';

export default {
  components: {
    PostCard
  },
  data() {
    return {
      articles: [],
      visibleCount: 8,
      loading: true,
      error: null,
    };
  },
  computed: {
    visibleArticles() {
      return this.articles.slice(0, this.visibleCount);
    },
    hasMore() {
      return this.visibleCount < this.articles.length;
    }
  },
  async mounted() {
    try {
      this.articles = await fetchArticles();
      console.log('Articles:', this.articles);
    } catch (e) {
      this.error = e;
      console.error('Error loading articles:', e);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    loadMore() {
      if (this.hasMore) {
        this.visibleCount += 8;
      }
    }
  }
};
</script>

<style>
.container {
  max-width: 1200px;
}
</style>
