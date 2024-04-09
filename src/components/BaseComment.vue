<template>
   
    <swiper
            :slidesPerView="slidesPerView"
            :spaceBetween="30"
            :loop="true"
            :modules="modules"
            class="mySwiper"
          >     

          
                 <swiper-slide>

                   
                    <div class="mx-auto w-96 h-96 border-2 border-gray-200 group hover:bg-blue-600 hover:border-blue-600 shadow-lg shadow-sky-950">
                        <div class="flex justify-center pt-8"><img src="/img/c1.png" alt="" class="size-16"></div>
                        <div class="w-60 mx-auto mt-8">
                            <p class="text-gray-500 text-center group-hover:text-white">Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. </p>
                        </div>
                        <div class="flex justify-center mt-10">
                            <span class="text-gray-700 group-hover:text-white">Tomas Lili</span>
                        </div>
                        <div class="flex justify-center">
                            <span class="text-gray-700 group-hover:text-white">New York</span>
                        </div>
                        
                    </div>
               
                 </swiper-slide>
                 <swiper-slide>
                    <div class="mx-auto w-96 h-96 border-2 border-gray-300 group hover:bg-blue-600 hover:border-blue-600 shadow-lg shadow-sky-950">
                        <div class="flex justify-center pt-8"><img src="/img/c2.png" alt="" class="size-16"></div>
                        <div class="w-60 mx-auto mt-8 ">
                            <p class="text-gray-500 text-center group-hover:text-white">Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. </p>
                        </div>
                        <div class="flex justify-center mt-10">
                            <span class="text-gray-700 group-hover:text-white">Romi Raine</span>
                        </div>
                        <div class="flex justify-center">
                            <span class="text-gray-700 group-hover:text-white">London</span>
                        </div>
                        
                    </div>
                 </swiper-slide>
                 <swiper-slide>
                    <div class="mx-auto w-96 h-96 border-2 border-gray-300 group hover:bg-blue-600 hover:border-blue-600 shadow-lg shadow-sky-950">
                        <div class="flex justify-center pt-8"><img src="/img/c3.png" alt="" class="size-16"></div>
                        <div class="w-60 mx-auto mt-8 ">
                            <p class="text-gray-500 text-center group-hover:text-white">Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. </p>
                        </div>
                        <div class="flex justify-center mt-10">
                            <span class="text-gray-700 group-hover:text-white">John Doe</span>
                        </div>
                        <div class="flex justify-center">
                            <span class="text-gray-700 group-hover:text-white">Washington</span>
                        </div>
                    </div>
                 </swiper-slide>
                 <swiper-slide>
                    <div class="mx-auto w-96 h-96 border-2 border-gray-300 group hover:bg-blue-600 hover:border-blue-600 shadow-lg shadow-sky-950">
                        <div class="flex justify-center pt-8"><img src="/img/c1.png" alt="" class="size-16"></div>
                        <div class="w-60 mx-auto mt-8 ">
                            <p class="text-gray-500 text-center group-hover:text-white">Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. </p>
                        </div>
                        <div class="flex justify-center mt-10">
                            <span class="text-gray-700 group-hover:text-white">Tomas Lili</span>
                        </div>
                        <div class="flex justify-center">
                            <span class="text-gray-700 group-hover:text-white">New York</span>
                        </div>
                    </div>
                 </swiper-slide>
                 <swiper-slide>
                    <div class="mx-auto w-96 h-96 border-2 border-gray-300 group hover:bg-blue-600 hover:border-blue-600 shadow-lg shadow-sky-950">
                        <div class="flex justify-center pt-8"><img src="/img/c2.png" alt="" class="size-16"></div>
                        <div class="w-60 mx-auto mt-8 ">
                            <p class="text-gray-500 text-center group-hover:text-white">Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. </p>
                        </div>
                        <div class="flex justify-center mt-10">
                            <span class="text-gray-700 group-hover:text-white">Romi Raine</span>
                        </div>
                        <div class="flex justify-center">
                            <span class="text-gray-700 group-hover:text-white">London</span>
                        </div>
                    </div>
                 </swiper-slide>
                 <swiper-slide>
                    <div class="mx-auto w-96 h-96 border-2 border-gray-300 group hover:bg-blue-600 hover:border-blue-600 shadow-lg shadow-sky-950">
                        <div class="flex justify-center pt-8"><img src="/img/c3.png" alt="" class="size-16"></div>
                        <div class="w-60 mx-auto mt-8 ">
                            <p class="text-gray-500 text-center group-hover:text-white">Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit. </p>
                        </div>
                        <div class="flex justify-center mt-10">
                            <span class="text-gray-700 group-hover:text-white">John Doe</span>
                        </div>
                        <div class="flex justify-center">
                            <span class="text-gray-700 group-hover:text-white">Washington</span>
                        </div>
                    </div>
                   
                 </swiper-slide>
          </swiper>

  
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import {ref,onMounted,onUnmounted} from "vue"

export default {
    name:'BaseComment',
    components:{
        Swiper,
        SwiperSlide,

    },
   
    setup(){
        const modules = [Pagination]
        const slidesPerView = ref<number>(1)
function setSlidesPerView(): void {
  if (window.innerWidth < 640) slidesPerView.value = 1
  else if (window.innerWidth < 992) slidesPerView.value = 2
  else slidesPerView.value = 3
}

onMounted(() => {
  setSlidesPerView()
  window.addEventListener('resize', setSlidesPerView)
})

onUnmounted(() => {
  window.removeEventListener('resize', setSlidesPerView)
})


        return{
            modules,
            slidesPerView
            }
    },
   

}
</script>

<style>

</style>