<template>
  <div class="container mx-auto flex flex-col relative">
    <nav class="fixed top-0 z-50 w-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div class="container mx-auto flex flex-wrap items-center justify-between p-5">
        <button @click="redirectToHome" class="flex items-center">
          <span class="self-center text-2xl text-green-400 font-bold">JonatanFirdausi</span>
        </button>
        <div class="flex md:order-2">
          <a href="https://github.com/Quoriath" class="ml-4">
            <img class="w-8 h-8 hover:opacity-80 transition-opacity" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="github">
          </a>
        </div>
        <div class="block md:hidden">
          <button @click="toggleMenu" class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-full md:flex md:items-center md:w-auto md:order-1 transition-all duration-300 ease-in-out">
          <ul class="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white">
            <li>
              <router-link to="/" @click="closeMenu" class="hover:text-yellow-300 transition duration-300">Home</router-link>
            </li>
            <li>
              <router-link to="/about" @click="closeMenu" class="hover:text-yellow-300 transition duration-300">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio" @click="closeMenu" class="hover:text-yellow-300 transition duration-300">Portfolio</router-link>
            </li>
            <!-- <li>
              <router-link to="/blog" @click="closeMenu" class="hover:text-yellow-300 transition duration-300">Blog</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>

    <div class="mt-20 fadein-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    redirectToHome() {
      this.$router.push('/')
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: #2c2c2c;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #4caf50;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

body {
  font-family: 'Poppins', sans-serif;
  background: #121212;
  color: #e0e0e0;
  height: 100vh;
}

nav a {
  font-weight: bold;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  color: #ffeb3b;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

.fadein-1 {
  animation-delay: 200ms;
}

.fadein-2 {
  animation-delay: 400ms;
}

.fadein-3 {
  animation-delay: 600ms;
}

.fadein-content {
  opacity: 0;
  animation: fadeInContent 1s ease-out forwards;
}

@keyframes fadeInContent {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

nav {
  transition: background-color 0.3s ease;
}

nav:hover {
  background-color: #1a202c;
}
</style>