<template>
  <div class="relative">

  <div class="">

  <header class="  bg-[url('../src/assets/welcome-banner.jpg')] bg-no-repeat bg-cover  w-screen h-screen">
    <section class="z-10 bg-black lg:bg-none  w-full py-3 lg:py-0 lg:h-20 lg:flex lg:justify-between lg:items-center fixed top-0">
      <div class="flex items-center space-x-24">
        <img src="../assets/icons8-hamburger-menu-50 (3).png" @click="handleoffcanvas" class="ml-2 mt-2 lg:hidden">
        <p class="text-white font-serif text-3xl">carvilla</p>
      </div>
      <!-- <div class="md:">
        <ul class="text-white font-bold uppercase flex justify-center space-x-12">
          <li class=" hover:text-blue-600"><a href="#">home</a></li>
          <li class=" hover:text-blue-600"><a href="#">service</a></li>
          <li class=" hover:text-blue-600"><a href="#">featured cars</a></li>
          <li class=" hover:text-blue-600"><a href="#">new cars</a></li>
          <li class=" hover:text-blue-600"><a href="#">brand</a></li>
          <li class="pr-28 hover:text-blue-600"><a href="#">contact</a></li>
        </ul>
      </div> -->
      <div v-if="status">
        <ul class="text-white font-bold uppercase ml-3 mt-6 lg:flex lg:justify-center lg:space-x-12 lg:m-0">
          <li class="mt-6 lg:m-0 hover:text-blue-600"><a href="#">home</a></li>
          <li class="mt-6 lg:m-0 hover:text-blue-600"><a href="#">service</a></li>
          <li class="mt-6 lg:m-0 hover:text-blue-600"><a href="#">featured cars</a></li>
          <li class="mt-6 lg:m-0 hover:text-blue-600"><a href="#">new cars</a></li>
          <li class="mt-6 lg:m-0 hover:text-blue-600"><a href="#">brand</a></li>
          <li class="mt-6 mb-6 lg:m-0 lg:pr-28 hover:text-blue-600"><a href="#">contact</a></li>
        </ul>
      </div>
    </section>
    <!-- <div class="z-20"> -->

    <div class="">
      <h2 class="text-white mt-20 pt-6 font-bold text-5xl text-center">
        GET YOUR DESIRED CAR IN RESONABLE PRICE
      </h2>
    </div>
    <div>
      <p class="text-white mt-16 text-center font-bold text-2xl w-3/4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="text-center py-16">
      <button class="text-white font-bold font-sans text-xl bg-blue-400 hover:bg-blue-700 w-1/2 sm:w-72 h-16 rounded-md">
        Contact us
      </button>
    </div>
    <!-- </div> -->
 </header>
    
  </div>
  </div>
</template> 
<script lang="ts">

export default {
    name:'BaseHeader',
    data(){
      return{
        status: true as boolean,
        }
      },
      methods: {
        handleoffcanvas(){
          this.status = !this.status
        }
      },
    }
    
 </script>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition-duration: 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} 
.welcome-hero::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(42, 45, 84, 0.6);
  z-index: 1;
}



</style>