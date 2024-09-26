<script>

export default {

  data() {
    return {
      courses: [{ courseImage: 'https://raw.githubusercontent.com/garder-les-ciseaux-droits/echidna/main/uploads/course-nails1.webp',name: 'Маникюрчик для ньюбисов!', description: ['Основы безупречного маникюра!', 'Всё для новичков!', 'Секреты идеальных ногтей!'], idea: 'Если ты кошко-девочка, то это для тебя лучший вариант разобраться в нашей сфере!', price: 1299}, {courseImage: 'https://raw.githubusercontent.com/garder-les-ciseaux-droits/echidna/main/uploads/course-nails2.webp', name: 'Маникюрчик для котеков!!!', description: ['Фантазируй с цветами!', 'Арт на каждом ногте!', 'Волшебные рисунки легко!'],  idea: 'Стань профи, не выходя из дома! Обучись топовым видам маникюра, ремонту и дизайну ногтей!', price: 2999}, {courseImage: 'https://raw.githubusercontent.com/garder-les-ciseaux-droits/echidna/main/uploads/course-nails3.webp', name: 'Мяу-маникюрчик', description: ['Уровень мастера!', 'Сложные техники — просто!', 'Будь экспертом красоты!'],   idea: 'А если ты хочешь каждый денб иметь огромную миску рисаааа, то самый супер-пупер-мега-крутой курс ждёт тебя!', price: 4999}]
    }},
    beforeDestroy() {

    },
    mounted(){
    
    document.addEventListener('DOMContentLoaded', () => {
    const messages = [
            {
                text1: 'Мяу! 🐾 Привет-привет, дорогой друг! Хочешь стать настоящим мастером маникюра? Тогда ты попал в нужное местечко! 😸 Наши курсы — это волшебная страна ноготков, где твои мечты становятся реальностью! ✨',
                text2: 'Я, твоя проводница в этот мир красоты — Мяу-тян! 🐾 И вместе мы будем создавать чудеса! 💅💖'
            },
            {
                text1: 'На наших курсах ты научишься не просто делать маникюр, а творить магию! 🎨 Мы расскажем тебе все секреты дизайна ногтей, как подобрать идеальные цвета, как делать милые рисунки и даже как стать популярным мастером в мире красоты! 🌸',
                text2: 'И что самое главное? Все это в супер-удобном формате, который подходит даже для новичков! Ты сможешь учиться в своём ритме и получать тонны удовольствия от процесса! 😺'
            }
        ];

      let currentIndex = 0;

    const nextMessButton = document.getElementById('next-mess');
    const messageDivs = document.querySelectorAll('.message');

    nextMessButton.addEventListener('click', () => {
        messageDivs.forEach((div, index) => {
            div.style.animation = 'fade-out 0.5s forwards';
          });

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            const messageData = messages[currentIndex];

            messageDivs[0].querySelector('p').innerText = messageData.text1;
            messageDivs[1].querySelector('p').innerText = messageData.text2;

            messageDivs.forEach((div) => {
                div.style.animation = 'fade-in 0.5s forwards';
            });
          }, 500);
        });
    });


    


      window.addEventListener('scroll', function() {
        const container = document.getElementById("card-container");
            if (window.scrollY > 640) {
              container.classList.add("animated");
             
    }});

    window.addEventListener('scroll', function() {
        const mess = document.getElementById("main-mess");
            if (window.scrollY > 540) {
              mess.style.animation = 'slide-in 1s forwards';
             
    }});



    },
    methods:{
    }
}


</script>

<template>
  <header class="w-full h-[680px] md:h-[780px] flex flex-col items-center pt-4 relative header overflow-x-hidden overflow-y-hidden">
    <!-- Навигационная панель -->
    <nav aria-label="Основная навигация" class="w-full h-[80px] min-w-0 max-w-full flex justify-center px-4">
      <div class="w-full md:w-[1280px] h-[80px] text-white flex items-center text-base rounded-3xl glass bg-black hover:bg-white/20 min-w-0 max-w-full">
        <!-- Логотип и название сайта -->
        <div class="w-1/2 md:h-full flex justify-start items-center space-x-2 min-w-0">
          <a href="/" class="flex items-center space-x-2">
            <figure>
              <img class="w-14 h-10 md:w-14 md:h-14 rounded-l-3xl drop-shadow-lg" src="/src/assets/background/logo.png" alt="Логотип NAIL COURSES">
            </figure>
            <span class="bg-gradient-to-r from-[#9d9cac] hover:text-cyan-100 to-[#b2aadf] h-[40px] md:h-[55px] flex items-center w-[250px] px-2 rounded-r-xl font-bold drop-shadow-lg md:text-base text-xs">NAIL COURSES (MEOW)</span>
          </a>
        </div>
        <!-- Навигационные ссылки -->
        <div class="hidden w-1/2 h-full md:flex justify-center items-center space-x-14 font-Tektur">
          <a href="/" class="drop-shadow-lg">домой /</a>
          <a href="/courses" class="drop-shadow-lg">курсы /</a>
          <a href="/about" class="drop-shadow-lg">об авторе /</a>
          <a href="/social" class="drop-shadow-lg">социальные сети</a>
        </div>
        <!-- Кнопка меню для мобильных устройств -->
        <div class="w-1/2 h-full md:hidden flex justify-end items-center">
          <button aria-label="Открыть меню" class="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
            <img src="/src/assets/images/menu-alt-1-svgrepo-com.svg" alt="">
          </button>
        </div>
      </div>
    </nav>
    <!-- Основной раздел -->
    <section class="w-[1280px] h-[580px] md:h-[500px] flex items-center font-ComforantGaram min-w-0 max-w-full pt-0 md:pt-10 px-4 min-h-0 max-h-full">
      <div class="w-full h-full flex">
        <!-- Левый контент -->
        <div class="w-full md:w-1/2 h-full space-y-6">
          <div class="w-full h-[65%] md:h-full space-y-6">
            <!-- Заголовок и сообщения -->
            <div class="md:w-full md:h-[70%] h-[70%]">
              <div class="w-full h-auto space-y-6">
                <h1 class="text-4xl font-bold text-white drop-shadow-xl">Курсы мяу! ноготочков!</h1>
                <!-- Блоки сообщений -->
                <div class="w-full h-fit flex flex-col message drop-shadow-lg">
                  <div class="relative w-fit max-w-[600px] h-fit flex items-center border border-gray-600 bg-white/50 rounded-xl px-4 py-4">
                    <p class="text-gray-600 md:text-base text-sm min-w-0">Мяу! 🐾 Привет-привет, дорогой друг! Хочешь стать настоящим мастером маникюра? Тогда ты попал в нужное местечко! 😸 Наши курсы — это волшебная страна ноготков, где твои мечты становятся реальностью! ✨</p>
                    <img class="md:w-14 w-10" src="/src/assets/images/exc-mark-gray.svg" alt="Восклицательный знак">
                  </div>
                </div>
                <div class="w-full h-fit flex flex-col message drop-shadow-lg space-y-4">
                  <div class="w-fit max-w-[500px] h-fit flex items-center border border-gray-600 bg-white/50 rounded-xl px-4 py-4">
                    <p class="text-gray-600 md:text-base text-sm">Я, твоя проводница в этот мир красоты — Мяу-тян! 🐾 И вместе мы будем создавать чудеса! 💅💖</p>
                    <img class="md:w-14 w-10" src="/src/assets/images/exc-mark-gray.svg" alt="Восклицательный знак">
                  </div>
                </div>
              </div>
            </div>
            <!-- Кнопка следующего сообщения -->
            <div class="md:w-full md:h-[30%] h-[30%]">
              <div class="relative w-full h-[60px] bg-black/70 flex items-center px-4 next-bar">
                <span class="text-white">// meow meow meow</span>
                <button id="next-mess" class="w-[30px] h-[30px] flex justify-center items-center right-0 absolute mr-4 rounded-lg hover:bg-cyan-100 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500" aria-label="Следующее сообщение">
                  <img src="/src/assets/images/arrow-right-svgrepo-com.svg" alt="Стрелка вправо">
                </button>
              </div>
            </div>
          </div>
          <!-- Кнопки для мобильных устройств -->
          <div class="w-full h-32 flex md:hidden justify-center glass-card rounded-2xl relative items-center">
            <div class="w-1/2 h-full flex-col flex justify-center space-y-2 pl-2 z-50">
              <button class="w-40 md:w-48 h-12 rounded-3xl text-white gradient-animation drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">Актуальные курсы</button>
              <button class="w-40 md:w-48 h-12 rounded-3xl text-white bg-gradient-to-l from-[#9d9cac] to-[#b2aadf] hover:bg-gradient-to-r hover:from-black hover:to-black drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">Обо мне</button>
            </div>
            <div class="w-1/2 h-full flex items-center justify-center rounded-xl drop-shadow-xl">
              <ul class="font-Tektur text-xs list-disc space-y-2 drop-shadow-xl">
                <li class="text-gray-700 font-Tektur">Твори ноготочки с профи!</li>
                <li class="text-gray-700 font-Tektur">Красота в каждом мазке!</li>
                <li class="text-gray-700 font-Tektur">Цена = Качество!</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Правый контент -->
        <div class="hidden w-1/2 h-full md:flex md:flex-col items-end space-y-2 min-w-0 max-w-full">
          <h2 class="hidden md:flex drop-shadow-xl font-Tektur text-gray-800 text-2xl">Топ курсики! >_<</h2>
          <!-- Контейнер с карточками -->
          <div class="hidden w-full h-full md:flex card-container relative justify-end pt-2 min-w-0 space-x-1 max-w-full">
            <!-- Карточка 1 -->
            <figure class="absolute card flex flex-col pt-2 items-center space-y-6 w-[200px] h-[300px] glass-card rounded-xl">
              <img class="w-[180px] h-[180px] drop-shadow-xl min-w-0 max-w-full" src="/src/assets/images/header/whiteNail-circle.png" alt="Белый маникюр">
              <figcaption class="text-gray-800 text-base">
                <button class="rounded-3xl glass-btn drop-shadow-xl border border-gray-300 hover:shadow-inner hover:text-black w-[160px] h-[50px] focus:outline-none focus:ring-2 focus:ring-cyan-500">Учись у профи!</button>
              </figcaption>
            </figure>
            <!-- Карточка 2 -->
            <figure class="absolute card flex flex-col pt-2 items-center space-y-6 w-[200px] h-[300px] glass-card rounded-xl">
              <img class="w-[180px] h-[180px] drop-shadow-xl" src="/src/assets/images/header/pinkNail-circle.png" alt="Розовый маникюр">
              <figcaption class="text-gray-800 text-base">
                <button class="rounded-3xl glass-btn drop-shadow-xl border border-gray-300 hover:shadow-inner hover:text-black w-[160px] h-[50px] focus:outline-none focus:ring-2 focus:ring-cyan-500">Красота в каждом мазке!</button>
              </figcaption>
            </figure>
            <!-- Карточка 3 -->
            <figure class="absolute z-0 card flex flex-col pt-2 items-center space-y-6 w-[200px] h-[300px] glass-card rounded-xl">
              <img class="w-[180px] h-[180px] drop-shadow-xl" src="/src/assets/images/header/blueNail-circle.png" alt="Синий маникюр">
              <figcaption class="text-gray-800 text-base">
                <button class="rounded-3xl glass-btn drop-shadow-xl hover:shadow-inner hover:text-black w-[160px] h-[50px] focus:outline-none focus:ring-2 focus:ring-cyan-500">Стань мастером маникюра!</button>
              </figcaption>
            </figure>
            <figure class="top-0 right-0 absolute z-0 -rotate-12">
              <img class="w-10 h-10" src="/src/assets/images/arrow4-svgrepo-com.svg" alt="Стрелка">
              <span class="text-black font-bold">*жмяк*</span>
            </figure>
          </div>
          <!-- Кнопки действий -->
          <div class="hidden w-full h-[130px] md:flex items-end justify-end space-x-10">
            <button class="w-[230px] h-[70px] rounded-3xl text-white gradient-animation drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">Актуальные курсы</button>
            <button class="w-[230px] h-[70px] rounded-3xl text-white bg-gradient-to-l from-[#9d9cac] to-[#b2aadf] hover:bg-gradient-to-r hover:from-black hover:to-black drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">Обо мне</button>
          </div>
        </div>
      </div>
    </section>
  </header>
  <main class="relative w-full h-auto overflow-x-hidden">
    <!-- Раздел курсов -->
    <section class="w-full h-[1950px] md:h-[900px] bg-[url('/src/assets/images/background-main-16.webp')] bg-cover bg-center relative flex flex-col items-center text-white min-w-0 max-w-full">
      <div class="absolute w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-95"></div>
      <div class="w-full h-full absolute pt-10">
        <!-- Главное сообщение -->
        <div class="w-full h-[230px] flex items-center md:justify-start justify-center md:pl-24 px-4 md:px-0">
          <div id="main-mess" class="w-full h-fit flex main-message items-center md:items-start flex-col drop-shadow-lg">
            <div class="relative w-fit max-w-[600px] h-fit flex items-center border border-gray-600 bg-white/90 rounded-xl px-4 py-4 space-x-2">
              <img class="w-14 h-14" src="/src/assets/images/icon.png" alt="Иконка">
              <p class="text-gray-600 md:text-base text-sm">Тут вы найдёте любые курсики! Мяу мяу мяу, мяу, мяу, мяу. Мяу-мяу мяу-мяуу.</p>
            </div>
          </div>
        </div>
        <!-- Карточки курсов -->
        <section class="w-full h-auto md:h-[500px] flex min-w-0 max-w-full px-4">
          <!-- Карточки для десктопа -->
          <div id="card-container" class="hidden w-full h-full md:flex course-card-container justify-center relative drop-shadow-lg">
            <article class="course-card drop-shadow-xl absolute course-glass-card shadow-xl rounded-3xl w-80 h-full flex flex-col items-start px-6 pt-4 bg-[url('/src/assets/images/cyberui.png')]" v-for="course in courses" :key="course.id">
              <div class="w-full h-full px-4 pt-4 rounded-b-3xl">
                <div class="w-full h-2/3 flex flex-col space-y-4">
                  <div class="w-full h-32 border-b-2 border-white">
                    <img class="rounded-t-xl clipped-image opacity-100" :src="course.courseImage" :alt="course.name">
                  </div>
                  <div class="w-full h-auto pl-2 space-y-2">
                    <span class="bg-gradient-to-r from-indigo-200 to-pink-200 text-transparent bg-clip-text font-Tektur text-xl drop-shadow-xl">{{ course.name }}</span>
                    <ul class="font-Tektur text-white drop-shadow-xl text-sm list-disc px-6">
                      <li v-for="(point, index) in course.description" :key="index">{{ point }}</li>
                    </ul>
                    <p class="font-Tektur text-white drop-shadow-xl text-sm">{{ course.idea }}</p>
                  </div>
                </div>
                <div class="w-full h-1/3 flex items-end pb-10">
                  <div class="w-full gradient-animation h-auto">
                    <p class="font-Tektur text-white text-2xl drop-shadow-xl">{{ course.price }}₽/<span class="text-lg">месяц</span></p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <!-- Карточки для мобильных устройств -->
          <div id="card-container-mobile" class="md:hidden w-full h-full flex flex-col course-card-container-mobile items-center space-y-6">
            <article class="course-card drop-shadow-xl course-glass-card rounded-3xl w-80 h-[500px] flex flex-col items-start px-2 pt-2 pb-4" v-for="course in courses" :key="course.id">
              <div class="w-full h-full px-4 pt-4 rounded-b-3xl">
                <div class="w-full h-full flex flex-col space-y-4 items-center pt-2">
                  <div class="w-60 h-32 border-b-2 border-white">
                    <img class="rounded-t-xl clipped-image opacity-100" :src="course.courseImage" :alt="course.name">
                  </div>
                  <div class="w-60 h-auto pl-2 space-y-2">
                    <span class="font-Tektur text-white drop-shadow-xl text-xl">{{ course.name }}</span>
                    <ul class="font-Tektur text-white drop-shadow-xl text-sm list-disc pl-6">
                      <li v-for="(point, index) in course.description" :key="index">{{ point }}</li>
                    </ul>
                    <p class="font-Tektur text-white drop-shadow-xl text-sm">{{ course.idea }}</p>
                  </div>
                  <div class="w-60 h-auto flex">
                    <div class="w-full gradient-animation h-auto flex">
                      <p class="font-Tektur text-white text-2xl drop-shadow-xl">{{ course.price }}₽/<span class="text-lg">месяц</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
    <!-- Раздел "Обо мне" -->
    <section class="w-full h-[1200px] md:h-[1000px] relative about-me-bg-mobile md:about-me-bg flex min-w-0 max-w-full">
      <div class="absolute w-full h-1/4 bg-gradient-to-b from-black via-transparent to-transparent opacity-0 md:opacity-100 z-40"></div>
      <div class="absolute w-full h-full bg-gradient-to-b from-pink-200 via-transparent to-indigo-300 opacity-60 z-20"></div>
      <div class="w-full h-full grid grid-rows-2 justify-items-center items-center md:flex md:justify-center md:items-center md:space-x-24 z-50 min-w-0 max-w-full">
        <!-- Карточка профиля -->
        <div class="drop-shadow-xl w-[350px] md:w-[450px] h-[540px] md:h-[600px] glass-card-about rounded-3xl relative">
          <div class="w-full h-full absolute bg-gradient-to-b from-indigo-300 via-pink-100 to-transparent opacity-70 rounded-3xl"></div>
          <div class="w-full h-full flex flex-col justify-start">
            <!-- Обложка и аватар -->
            <div class="w-full h-40 relative flex">
              <figure>
                <img class="clipped-image-cover rounded-3xl" src="/src/assets/images/about-me/about-me-cover2.webp" alt="Обложка">
              </figure>
              <div class="w-full h-40 md:h-44 absolute flex items-end pl-8">
                <div class="w-[6rem] h-[6rem] gradient-animation-about rounded-full flex justify-center items-center">
                  <img class="w-[90px] h-[90px]" src="/src/assets/images/icon.png" alt="Иконка профиля">
                </div>
              </div>
            </div>
            <!-- Имя и никнейм -->
            <div class="w-full h-16 md:h-24 flex justify-start pl-10 drop-shadow-xl">
              <div class="w-full md:w-1/3 h-full flex flex-col justify-center">
                <span id="name" class="font-Tektur drop-shadow-xl font-bold text-2xl">alt x m ! o</span>
                <span id="nickname" class="drop-shadow-xl underline">@plasticmoth</span>
              </div>
            </div>
            <!-- Текст "Обо мне" -->
            <div class="w-full h-64 md:h-60 px-10 mt-4 md:mt-0">
              <div class="w-full h-full gradient-animation-about rounded-xl flex flex-col relative drop-shadow-xl text-zinc-900">
                <div class="w-full h-full absolute opacity-30 rounded-xl"></div>
                <div class="w-full h-full flex flex-col justify-start py-4 md:py-6 px-6 space-y-1">
                  <span class="font-bold font-Montserrat text-base drop-shadow-xl">Обо мне</span>
                  <p class="font-Montserrat text-sm drop-shadow-xl">
                    :XX_Tenderly_56: ユーエンミー:XX_Tenderly_56:
                    ユーエンミー
                    ユーエンミー
                    :XX_Tenderly_56: ラブラブ:XX_Tenderly_56:
                  </p>
                  <span class="font-bold font-Montserrat text-base drop-shadow-xl">Мои скиллы</span>
                  <ul class="font-Montserrat text-sm list-disc px-4 drop-shadow-xl">
                    <li>Мяукать >_<</li>
                    <li>Спать</li>
                    <li>Мурчать</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Карточка чата -->
        <div class="drop-shadow-xl w-[350px] md:w-[450px] h-[540px] md:h-[600px] black-glass-card rounded-3xl relative">
          <div class="w-full h-full absolute bg-gradient-to-b from-purple-300 to-transparent rounded-3xl opacity-40"></div>
          <div class="w-full h-full flex flex-col items-center px-6 justify-start py-10 space-y-2 md:space-y-10 drop-shadow-xl">
            <!-- Заголовок чата -->
            <div class="w-full h-24 md:h-28 bg-zinc-800 rounded-3xl drop-shadow-xl flex items-center px-6 space-x-4">
              <img class="w-10 h-10 rounded-full" src="/src/assets/images/icon.png" alt="Иконка профиля">
              <p class="flex flex-col">
                <span id="name" class="font-Tektur drop-shadow-xl text-white font-bold text-sm">alt x m ! o</span>
                <span class="text-white text-xs md:text-sm font-Tektur">Интересно, почему вам нужны мои курсики?!</span>
              </p>
            </div>
            <!-- Сообщения чата -->
            <div class="w-full h-96 md:h-80 bg-zinc-800 rounded-3xl drop-shadow-xl flex flex-col px-6 py-4 space-y-4">
              <p class="space-x-2">
                <span class="font-Tektur text-white opacity-80 text-xs">21:00</span>
                <span id="name" class="font-Tektur drop-shadow-xl text-white font-bold text-sm">alt x m ! o</span>
                <span class="text-white text-sm font-Tektur">Во-первых, я кошко-девочка &lt; meow &gt;</span>
              </p>
              <p class="space-x-2">
                <span class="font-Tektur text-white opacity-80 text-xs">21:01</span>
                <span id="name" class="font-Tektur drop-shadow-xl text-white font-bold text-sm">alt x m ! o</span>
                <span class="text-white text-sm font-Tektur">Во-вторых, у меня большой-большой опыт в люксовом салончике!!!</span>
              </p>
              <p class="space-x-2">
                <span class="font-Tektur text-white opacity-80 text-xs">21:03</span>
                <span id="name" class="font-Tektur drop-shadow-xl text-white font-bold text-sm">alt x m ! o</span>
                <span class="text-white text-sm font-Tektur">Мои курсики, мяу, созданы лично мной от всего моего кошко-сердца...</span>
              </p>
              <p class="space-x-2">
                <span class="font-Tektur text-white opacity-80 text-xs">21:05</span>
                <span id="name" class="font-Tektur drop-shadow-xl text-white font-bold text-sm">alt x m ! o</span>
                <span class="text-white text-sm font-Tektur">А ещё!!! Я умею делать красивейший маникюр и общаться с самыми требовательными клиентами</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>


  <footer class="w-full h-[650px] relative bg-zinc-700 print-cat-bg overflow-x-hidden">
    <div class="w-full h-full absolute bg-gradient-to-b from-indigo-300 to-transparent opacity-50 z-40"></div>
    <div class="w-full h-full absolute z-50 flex flex-col">
      <!-- Призыв к действию -->
      <div class="w-full h-1/4 flex justify-center items-center pt-16">
        <div class="w-96 h-44 rounded drop-shadow-2xl flex justify-center items-center">
          <button class="w-56 h-20 glass-btn font-Tektur rounded-3xl hover:rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500">Узнать больше</button>
        </div>
      </div>
      <!-- Содержимое футера -->
      <div class="flex flex-col w-full h-3/4 items-center justify-start pt-16 space-y-10">
        <div class="flex w-full h-[80px] bg-black/40 justify-center items-center space-x-4 drop-shadow-2xl">
          <span class="font-Tektur text-white text-4xl animated-text">NAIL COURSES(MEOW)</span>
          <img class="w-10 h-10 rounded-xl" src="/src/assets/background/logo.png" alt="Логотип NAIL COURSES">
        </div>
        <span class="text-black font-Tektur text-lg drop-shadow-2xl">// made by Ev for Eve</span>
        <!-- Иконки социальных сетей -->
        <div class="flex space-x-4 w-auto h-auto drop-shadow-xl">
          <a href="#" aria-label="Telegram" class="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
            <!-- SVG иконка Telegram -->
            <svg  fill="black" role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" class="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
            <!-- SVG иконка Instagram -->
             <svg fill="black" role="img"  width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
          </a>
          <a href="#" aria-label="TikTok" class="focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
            <!-- SVG иконка TikTok -->
            <svg fill="black" role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
          </a>
        </div>
        <span class="text-black font-Tektur text-xs md:text-sm opacity-70">© 2024 NAIL COURSES(MEOW) / Все права защищены</span>
      </div>
    </div>
  </footer>





</template>

<style>



body{
  background-image: url('/src/assets/background/header5.png');
  background-position: center;
  background-size: cover;
}




.animated-text {
    display: inline-block;
    white-space: nowrap;
    padding-left: 100%;
    animation: moveText 30s linear infinite;
    color: #fff;

}

@keyframes moveText {
    0%{
        transform: translateX(-65%);
    }
    50%
    {
      transform: translateX(-10%);
    }
    100% {
        transform: translateX(-65%);
    }
}



.glass {

            background: rgba(255, 255, 255, 0); /* Полупрозрачный белый цвет */
            backdrop-filter: blur(10px); /* Размытие фона */
           
            color: #fff;
          
  }


.glassy{
  background: rgb(228,235,255);
  background: linear-gradient(90deg, rgba(228,235,255,1) 0%, rgba(230,230,230,1) 100%);

          
}


.glass-btn {
  background: rgb(228,235,255);
  background: linear-gradient(90deg, rgba(228,235,255,1) 0%, rgba(230,230,230,1) 100%);
} 

.glass-btn:hover{
  background: rgb(228,235,255);
  background: linear-gradient(90deg, rgba(228,235,255,0.7) 0%, rgba(230,230,230,0.7) 100%);
}

.glass-card{
  background: rgba(255, 255, 255, 0.3); 
  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.3); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

  background-image: url('/src/assets/images/header/code-matrix.png');
  background-size:cover;

  background-blend-mode: overlay;
}
.glass-card-about{
  background: rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.3); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

  background-image: url('/src/assets/images/header/code-matrix.png');
  background-size:cover;

  background-blend-mode: overlay;}
.black-glass-card{
  background: rgba(255, 255, 255, 0.7); 
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.3); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  background-image: url('/src/assets/images/card-print-trans.png');
  background-size:100px;
  background-position:left;

  background-blend-mode: overlay;


}
.print-cat-bg{
  background: rgba(255, 255, 255, 0.7); 
  backdrop-filter: blur(6px);

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  background-image: url('/src/assets/images/card-print-trans.png');
  background-size:100px;
  background-position:left;

  background-blend-mode: overlay;


}
.about-me-bg{


  backdrop-filter: blur(6px);

  background-image: url('/src/assets/images/about-me/about-me-background-5.png');
  background-size:1801px;
  background-position:left;

  background-blend-mode: overlay;

}
.footer-bg{
  background-image: url('/src/assets/images/footer/white-dna-footer.png');
  background-size:cover;
  background-position:center;
}
.about-me-bg-mobile{


backdrop-filter: blur(6px);

background-image: url('/src/assets/images/about-me/about-me-background-5.png');
background-size:cover;
background-position:left;

background-blend-mode: overlay;

}

.course-glass-card{
  /* background: rgba(179, 181, 255, 0.407); */

  background: rgba(22, 22, 22, 0.9);

  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

  background-image: url('/src/assets/images/cyberui-6.png');
  background-size:cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}
        

.glass:hover {
            background: rgba(255, 255, 255, 0.3); 
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3); 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
            
}

.glass:hover a{
  color: black;
}


.message {
            opacity: 0;
            transform: translateY(20px);
            animation: slide-in 1s forwards;
}
.message:nth-child(3) {
            animation-delay: 0.8s;
        }
.message:nth-child(2) {
            animation-delay: 0.5s;
        }

.main-message {
  transform: translateY(20px);
  opacity: 0;

}

.next-bar{

  animation: slide-right 1.2s;
}    
@keyframes slide-right{
  from{
    opacity: 0;
    transform: translateX(-100%);
    }

  to{opacity: 1;
    transform: translateX(0%);
  }
}    
@keyframes slide-in {
    to {
                opacity: 1;
                transform: translateY(0);
    }
}
     
@keyframes slide-down {
    from {
        top: -80px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}

nav.fixed{
  animation: slide-down 0.5s ease-out;
  z-index: 1000;
  
  
}

.course-card{
  transition: transform 0.8s ease, opacity 0.5s ease;
}



.course-card-container.animated .course-card:nth-child(1) {
            transform: translateX(-110%) rotateY(-10deg);
            opacity: 1;
}

.course-card-container.animated .course-card:nth-child(2) {
            transform: translateX(0) rotateY(0);
            opacity: 1;
}

.course-card-container.animated .course-card:nth-child(3) {
            transform: translateX(110%) rotateY(10deg);
            opacity: 1;
}






.card {


   transition: transform 0.5s ease, opacity 0.5s ease;
}

.card-container:hover .card:nth-child(1) {
            transform: translateX(-105%) rotateY(10deg);
            opacity: 0.9;
}

.card-container:hover .card:nth-child(2) {
            transform: translateX(-210%) rotateY(10deg);
            opacity: 0.9;
}

.card-container:hover .card figcaption{
  opacity: 1;
}



.clipped-image {
  width: 100%;
  height: auto;
  clip-path: inset(0 0 50% 0); /* Clip 50% from the left */
}
.clipped-image-cover {
  width: 100%;
  height: auto;
  clip-path: inset(0 0 40% 0);
}
@keyframes fade-out {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-20px);
    }
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.message.hidden {
    display: none;
}


.course-gradient-animation {
            background-size: 200% 200%;
            animation: course-gradient-animation 6s ease infinite;
       
}

@keyframes course-gradient-animation {
            0%, 100% {
                background-position: 0% 50%;
                background-image: linear-gradient(to right, #e4d3ff, #3b3b3b, #6f6f6f);
            }
            50% {
                background-position: 100% 50%;
                background-image: linear-gradient(to right, #e4d3ff, #3b3b3b, #867647);
            }
}

.gradient-animation {
            background-size: 200% 200%;
            animation: gradient-animation 6s ease infinite;
       
}
.gradient-animation-about {
            background-size: 200% 200%;
            animation: gradient-animation-about 6s ease infinite;
       
}

@keyframes gradient-animation {
            0%, 100% {
                background-position: 0% 50%;
                background-image: linear-gradient(to right, #e4d3ff, #6366F1, #89daff);
            }
            50% {
                background-position: 100% 50%;
                background-image: linear-gradient(to right, #e4d3ff, #6366F1, #89daff);
            }
}
@keyframes gradient-animation-about {
            0%, 100%{
                background-position: 0% 0%;
                background-image: linear-gradient(128deg, #ccb6d1, #ffffff, #ccb6d1);
            }
            50% {
                background-position: 100% 0%;
                background-image: linear-gradient(128deg, #ccb6d1, #ffffff, #ccb6d1);
            }
}

.gradient-animation:hover {
            background: #000;
             animation: none;
}

</style>
