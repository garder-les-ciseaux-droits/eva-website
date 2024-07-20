<script>
import MainLanding from '/src/components/MainLanding.vue'
export default {
  components:{
    MainLanding,
  },
  data() {
    return {

    }
    },
    mounted(){
      window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 430) {
                nav.classList.add('fixed');
                nav.classList.remove('hidden');
            } else {
                nav.classList.remove('fixed');
                nav.classList.add('hidden');
            }
        });
        
    }
    
}
</script>

<template>
  <div class="w-screen h-screen relative ">
    <nav class="w-full h-[80px] min-w-0 max-w-full flex justify-center px-4 hidden mt-4" >
      <div  class="w-full md:w-[1280px] h-[80px] text-white   flex items-center text-base rounded-3xl glass bg-black hover:bg-white/20 bg-black min-w-0 max-w-full">
        <div class="w-1/2 md:h-full flex justify-start items-center space-x-2 min-w-0">
          <figure>
            <img class="w-14 h-10 md:w-14 md:h-14 rounded-l-3xl drop-shadow-lg" src="/src/assets/background/logo.png" alt="logo">
          </figure>
          <div class="bg-gradient-to-r from-[#9d9cac] hover:text-cyan-100 drop-shadow-lg to-[#b2aadf] h-[40px] md:h-[55px] flex items-center w-[250px] px-2 rounded-r-xl">
            <span class="font-bold drop-shadow-lg md:text-base text-xs">NAIL COURSES (MEOW)</span>
          </div>
        </div>
        <div class="hidden w-1/2 h-full md:flex justify-center items-center space-x-14 font-Tektur">
          <a class="  drop-shadow-lg">домой /</a>
          <a class=" drop-shadow-lg">курсы /</a>
          <a class=" drop-shadow-lg">об авторе /</a>
          <a class=" drop-shadow-lg">социальные сети</a>
        </div>
        <div class="w-1/2 h-full md:hidden flex justify-end items-center">
          <img src="/src/assets/images/menu-alt-1-svgrepo-com.svg">
        </div>
      </div>
    </nav>  
    <MainLanding/>
  </div>

</template>

<style>
::-webkit-scrollbar {
  width: 0px;

}

::-webkit-scrollbar-track {
  background: rgba(241, 241, 241, 0);
}




::-webkit-scrollbar-thumb:hover {
  background: #020202;
  border-radius: 6px;
}
</style>
