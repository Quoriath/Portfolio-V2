<template>
  <div class="container mx-auto p-4 md:p-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-2">
        <div class="grid grid-cols-1 gap-6">
          <article v-for="article in articles" :key="article.id" class="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:bg-gray-800 transition transform hover:scale-105">
            <router-link :to="`/read/${article.slug}/${article.id}`" class="flex flex-col md:flex-row items-start md:items-center">
              <div class="flex-1 pr-4">
                <div class="text-xs mb-2 text-gray-400 italic">{{ article.date }}</div>
                <h1 class="text-lg md:text-xl text-yellow-400 font-bold mb-2">{{ article.title }}</h1>
                <p class="text-sm md:text-base text-gray-300">{{ article.desc }}</p>
              </div>
              <div class="w-full md:w-32 h-32 mt-4 md:mt-0">
                <img :src="article.image" class="w-full h-full object-cover rounded-lg shadow-lg" alt="">
              </div>
            </router-link>
          </article>
        </div>
      </div>
      <div class="md:col-span-1">
        <div class="sticky top-24 p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
          <h2 class="text-lg text-yellow-400 font-semibold mb-4">Topics</h2>
          <div class="flex flex-wrap gap-2">
            <span class="py-2 px-4 bg-gray-700 text-white rounded-full cursor-pointer hover:bg-gray-600 transition">NodeJS</span>
            <span class="py-2 px-4 bg-gray-700 text-white rounded-full cursor-pointer hover:bg-gray-600 transition">Technology</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ArticleList />
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';
import axios from "axios";
export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    ArticleList
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      axios.get('https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all')
        .then(response => {
          this.articles = response.data;
        })
    },
  }
}
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}
</style>