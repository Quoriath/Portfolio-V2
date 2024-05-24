<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Advanced'
        },
        {
          id: 3,
          name: 'ReactJS',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: 'Intermediate'
        },
        {
          id: 4,
          name: 'VueJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: 'Beginner'
        },
        {
          id: 5,
          name: 'Material-UI',
          imageUrl: 'https://material-ui.com/static/logo.png',
          status: 'Intermediate'
        },
        {
          id: 6,
          name: 'NodeJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: 'Intermediate'
        },
        {
          id: 7,
          name: 'Python',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
          status: 'Intermediate'
        }
      ],
      languages: [
        {
          id: 1,
          name: 'Javanese & Indonesian',
          imageUrl: require('@/assets/indonesia-flag.png'), // Bendera Indonesia
          status: 'Native'
        },
        {
          id: 2,
          name: 'English',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/197/197374.png', // Bendera Inggris
          status: 'Fluent'
        },
      ]
    };
  }
}
</script>
<template>
  <div class="bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-5 md:px-12 md:py-10 text-left border border-gray-700 rounded-3xl text-white mx-3 mb-5 shadow-lg">
    <article data-page="about">
      <header>
        <div class="text-4xl font-extrabold text-white mb-5 fadein-bot title-section flex items-center justify-center">
          About Me &nbsp;
        </div>
      </header>
      <section class="text-base md:text-xl text-justify flex flex-col md:flex-row gap-4 md:gap-8 md:justify-center md:items-center">
        <div class="flex justify-center md:w-1/3">
          <img class="w-9/12 md:w-full rounded-full mb-3 fadein-up shadow-2xl" :src="require('@/assets/Photo.jpg')" alt="Foto">
        </div>
        <div class="md:w-2/3">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; Hi everyone! My name is Jonatan Firdausi. I'm a web developer, translator, and Python script writer from Probolinggo, East Java. I
            have 1 year of experience in back-end web development.
            I really enjoy what I do right now, in my opinion, creating programs is not just a job, but also an art that
            has aesthetic value.
          </p>
          <p class="mb-3 fadein-left fadeins-2">
            &nbsp; &nbsp; &nbsp; My job is to build your website to be functional and user-friendly yet still attractive.
            In addition, I provide a personal touch to your product and ensure that the website catches attention and is easy to use.
            My goal is to convey your message and identity in the most creative way. If you are interested in hiring me, please contact the listed contact.
          </p>
        </div>
      </section>
    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-white mx-3">
    <article data-page="about">
      <header>
        <div class="text-4xl font-extrabold text-white mb-5 fadein-bot title-section flex items-center justify-center">
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap justify-center text-sm font-medium text-center text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white transition-all duration-300"
                :class="{ 'text-blue-400 bg-blue-400 bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white transition-all duration-300"
                :class="{ 'text-blue-400 bg-blue-400 bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">Languages</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex flex-col items-center cursor-pointer gap-2 rounded border border-blue-400 px-2 py-2 hover:bg-blue-400 hover:bg-opacity-10 md:gap-3 lg:px-3 shadow-md transition-all duration-300">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img :alt="item.name" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex flex-col items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 mt-2 text-[10px] text-blue-400 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in languages" :key="item.id">
              <div
                class="item-tech flex flex-col items-center cursor-pointer gap-2 rounded border border-blue-400 px-2 py-2 hover:bg-blue-400 hover:bg-opacity-10 md:gap-3 lg:px-3 shadow-md transition-all duration-300">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img :alt="item.name" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex flex-col items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 mt-2 text-[10px] text-blue-400 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 1s ease-out forwards;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

.bg-gradient-to-r {
  background: linear-gradient(to right, #2c3e50, #4ca1af);
}

.border-gray-700 {
  border-color: #4a5568;
}

.text-secondary {
  color: #a0aec0;
}

.shadow-lg {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.shadow-2xl {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.zoom-in {
  animation: zoomIn 0.5s ease-out forwards;
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fadein-up {
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 1s ease-out forwards;
}
@keyframes fadeInBot {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>