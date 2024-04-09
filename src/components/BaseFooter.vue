<template>
  <div class="bg-naft">
    <div class="md:container mx-auto p-8">
      <!-- 5 -->
      <div
        class="common text-white flex phone:flex-col md:flex-col lg:flex-row items-baseline"
      >
        <div
          class="common-col-1-2 flex phone:flex-col md:flex-row md:justify-between lg:gap-32 lg:w-1/2 gap-6 mb-10 lg:mb-0 md:items-baseline"
        >
          <div class="col-1 flex flex-col lg:w-2/3 md:w-2/5 sm:w-2/5">
            <p class="text-white mb-4 font-rufina text-2xl" href="index.html">
              CARVIILA
            </p>
            <p class="font-poppins font-light mb-6">
              Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua.
              Ut enim ad minim veniam.
            </p>
            <p class="text-shiri">info@themesine.com</p>
            <p class="mb-2 text-shiri">+1 (885) 2563154554</p>
          </div>
          <div class="col-2 flex flex-col lg:w-2/3 sm:w-2/5 justify-center">
            <h2 class="text-white font-poppins font-normal mb-4">
              ABOUT DEVLEOON
            </h2>
            <ul class="text-shiri space-y-4 flex flex-col gap-2">
              <a href="#"><li class="hover:scale-110">About US</li></a>
              <a href="#"><li class="hover:scale-110">Career</li></a>
              <a href="#"><li class="hover:scale-110">Terms oF Service</li></a>
              <a href="#"><li class="hover:scale-110">oF Service</li></a>
            </ul>
          </div>
        </div>
        <div
          class="common-col-3-4 flex lg:w-1/2 lg:gap-10 lg:mb-0 md:justify-center md:gap-72 md:items-baseline phone:space-x-8"
        >
          <div
            class="col-3 text-shiri mb-4 lg:flex lg:justify-center lg:flex-col lg:items-center lg:w-1/2"
          >
            <h2 class="text-white font-poppins font-medium mb-4">TOP BRANDS</h2>
            <ul class="flex flex-col gap-6">
              <a href="#"><li class="hover:scale-110">BMW</li></a>

              <a href="#"><li class="hover:scale-110">Lamborghini</li></a>

              <a href="#"><li class="hover:scale-110">Camaro</li></a>

              <a href="#"> <li class="hover:scale-110">Audi</li></a>

              <a href="#"><li class="hover:scale-110">Infiniti</li></a>

              <a href="#"> <li class="hover:scale-110">Nissan</li></a>
            </ul>
          </div>
          <div class="col-4 text-shiri text-start">
            <h2 class="text-white font-poppins font-medium mb-4">TOP BRANDS</h2>
            <ul class="flex flex-col gap-6">
              <a href="#"><li class="hover:scale-110">Benz</li></a>
              <a href="#"><li class="hover:scale-110">Ferrari</li></a>
              <a href="#"><li class="hover:scale-110">Porscha</li></a>
              <a href="#"><li class="hover:scale-110">Land Rover</li></a>
              <a href="#"><li class="hover:scale-110">Aston Martin</li></a>
              <a href="#"> <li class="hover:scale-110">Opel</li></a>
            </ul>
          </div>
        </div>
        <div class="col-5 flex flex-col justify-center gap-8">
          <h2 class="text-white font-normal font-poppins">NEWS LETTER</h2>
          <p>Subscribe to get latest news update and informations</p>
          <div
            class="border flex justify-around items-center px-2 py-1 border-naft rounded-full shadow-2xl ring-naft shadow-black lg:w-4/5"
          >
            <input
              class="bg-naft w-2/3 rounded-lg border-0 ring-0 ring-naft"
              type="email"
              placeholder="Add Email"
            />

            <img class="w-6 h-6" src="/img/icons8-right-50.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 5 -->
    </div>
    <div class="lg:container mx-auto">
      <div class="border-t-2 mt-10 border-gray-500">
        <div class="flex justify-center items-center lg:justify-start py-4">
          <p class="text-shiri pl-2 md:pl-0">
            © copyright.designed and developed by
            <a href="index.html">themesine</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

  


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'BaseFooter',
});
</script>

<style scoped>

</style>
  