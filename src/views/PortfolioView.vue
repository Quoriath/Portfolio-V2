<template>
  <div class="container mx-auto p-6 text-white">
    <article data-page="projects">
      <header class="mb-8 text-center">
        <h2 class="text-4xl font-bold fadein-up">Project Experience</h2>
        <p class="text-lg text-gray-400 fadein-up">Explore the projects I've worked on so far</p>
      </header>
      <section>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in items" :key="item.id" class="project-card p-6 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105 fadein-up">
            <img :src="getImageUrl(item.imageUrl)" alt="Project Image" class="w-full h-48 object-cover rounded-lg mb-4 shadow-md transition duration-300 transform hover:scale-105">
            <h3 class="text-2xl font-semibold">{{ item.name }}</h3>
            <p class="text-gray-400 mt-2" v-html="sanitizeHTML(item.description)"></p>
            <p class="mt-4 text-sm text-gray-500">{{ item.technologies }}</p>
            <div class="mt-6 flex justify-end space-x-4">
              <a v-if="item.githubLink" :href="item.githubLink" target="_blank" rel="noreferrer" class="text-blue-400 hover:text-blue-600 transition">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a v-if="item.demoLink" :href="item.demoLink" target="_blank" rel="noreferrer" class="text-green-400 hover:text-green-600 transition">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import DOMPurify from 'dompurify';

export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: 'First Portfolio Web',
          imageUrl: 'web',
          description: 'My personal website, created to showcase my profile, skills, and projects. Also a place to experiment with new technologies.',
          technologies: 'HTML, CSS',
          githubLink: 'https://github.com/Quoriath',
          demoLink: 'https://myportfolio-old.vercel.app/'
        }
      ]
    };
  },
  methods: {
    sanitizeHTML(html) {
      return DOMPurify.sanitize(html);
    },
    getImageUrl(imageName) {
      return require(`@/assets/${imageName}.png`);
    }
  }
}
</script>

<style>
.container {
  padding: 2rem;
}

.project-card {
  transition: transform 0.3s, background-color 0.3s;
}

.project-card:hover {
  transform: scale(1.05);
  background-color: #2d3748;
}

img {
  transition: transform 0.3s;
}

img:hover {
  transform: scale(1.05);
}
</style>