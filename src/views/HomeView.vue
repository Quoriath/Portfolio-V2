<template>
  <main class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh] bg-dark">
    <div class="space-y-4 text-center md:text-left px-10 md:flex-1 md:pl-32">
      <p class="text-blue-300 text-lg fadein-up">Hello, I'm</p>
      <h1 class="text-5xl font-extrabold md:text-6xl text-white fadein-up">Jonatan Firdausi</h1>
      <div class="py-2">
        <h1 class="typewrite text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 md:text-3xl fadein-up" ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p class="text-white pr-4 fade-in-from-left text-lg">Welcome to My personal website. <span class="wave">👋🏼</span></p>
      <div class="flex justify-center md:justify-start mt-4 fadein-up">
        <a href="https://github.com/Quoriath" target="_blank" class="text-blue-400 hover:text-blue-600 transition mx-2">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex justify-center md:justify-start fadein-right md:flex-1">
      <img alt="avatar" fetchpriority="high" width="400" height="400" decoding="async" data-nimg="1" class="w-10/12 md:w-8/12 md:h-auto rounded-full border-4 border-blue-300 pict shadow-lg glow-blue" :src="require('@/assets/Photo.jpg')">    
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      toRotate: ["Web Developer", "Translator", "Python Script"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
  }
}
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
  background: #121212;
  font-family: 'Poppins', sans-serif;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(112, 219, 255, 0.44);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(112, 219, 255, 0.44);
  -moz-box-shadow: 0px 0px 73px -9px rgba(112, 219, 255, 0.44);
}

.glow-blue {
  animation: glow 1.5s infinite alternate ease-in-out;
}

@keyframes glow {
  from {
    box-shadow: 0 0 10px rgba(64, 147, 255, 0.6), 0 0 15px rgba(64, 147, 255, 0.6), 0 0 20px rgba(64, 147, 255, 0.6), 0 0 25px rgba(64, 147, 255, 0.6);
  }
  to {
    box-shadow: 0 0 15px rgba(64, 147, 255, 0.8), 0 0 20px rgba(64, 147, 255, 0.8), 0 0 25px rgba(64, 147, 255, 0.8), 0 0 30px rgba(64, 147, 255, 0.8);
  }
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.8s ease-out forwards;
  animation-delay: 500ms;
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

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.8s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.8s forwards;
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
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
.fade-500 {
  animation-delay: 500ms;
}
</style>