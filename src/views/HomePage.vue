<template>
  <BaseHeader/>
  <div class="md:container mx-auto flex flex-col items-center">
    <base-selection></base-selection>
  </div>
  <section class="w-full  bg-slate-200 mt-20 space-y-2 pb-8">
    <div class="flex justify-center pt-4">
      <p class="text-slate-500">Checkout the Latest Cars</p>
    </div>
    <div class="flex justify-center">
      <h2 class="text-5xl text-slate-800">Newest Cars</h2>
    </div>
    <div class="flex justify-center">
      <p class="border-b-2 border-blue-700 w-14 mt-8"></p>
    </div>
    <div class="overflow-hidden flex  md:container mx-auto">

    <BaseCar 
    :style="`transform: translateX(-${currentIndex * 100}%)`"
    v-for="carmodel in carmodels" 
      :key="carmodel.name"
      :imgc="carmodel.imgc"
      :name="carmodel.name"
      :description="carmodel.description"
      @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
>
      
    </BaseCar>
    </div>
   
    
   </section>
  <section class="BaseFor">
    <div class="bg-white pt-8">
      <div class="flex justify-center pt-8">
        <p class="text-slate-500">Checkout the Latest Cars</p>
      </div>
      <div class="flex justify-center">
        <h2 class="text-5xl text-slate-800">featured Cars</h2>
      </div>
      <div class="flex justify-center">
        <p class="border-b-2 border-blue-700 w-14 mt-8"></p>
      </div>
    </div>

    <div class="flex flex-wrap justify-center items-center gap-8 pb-20 md:container mx-auto">
      <BaseProudact v-for="productcar in productcars" 
      :key="productcar.name"
      :name ="productcar.name"
      :price="productcar.price"
      :description="productcar.description"
      :imgCar="productcar.img"
      />
    </div>
  </section>
  <section class="bg-gray-100 py-8 ">
    <div class="pb-14">
        <div class="flex items-center justify-center">
            <h2 class="text-5xl text-center text-slate-800">what our clients say</h2>
        </div>
        <div class="flex justify-center">
            <p class="border-b-2 border-blue-700 w-14 mt-8"></p>
        </div>
    </div>
    <div class="md:container mx-auto">
    </div>

  <BaseBrand></BaseBrand>
  </section>

  <BaseComment/>
  
  
  <BaseFooter/>
 
  
 
  
 
</template>

<script  lang="ts">
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import BaseHeader from '../components/BaseHeader.vue'
import BaseSelection from '../components/BaseSelection.vue'
import BaseCar from '../components/BaseCar.vue'
import BaseProudact from '../components/BaseProudact.vue'
import BaseComment from '../components/BaseBrand.vue'
import BaseBrand from '../components/BaseComment.vue'
import BaseFooter from '../components/BaseFooter.vue'


import { defineComponent,ref } from 'vue'
export default defineComponent({
  components:{
    BaseHeader,
    BaseSelection,
    BaseCar,
    BaseProudact,
    BaseComment,
    BaseBrand,
    BaseFooter,
    Carousel,
    Slide,
    Pagination,

  },
setup(){
  const productcars = [
    {
    name:"BMW 6-series gran coupe",
    price:"0",
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    img:"/img/fc1.png",


    },
    {
    name:"chevrolet camaro WMV20",
    price:"0",  
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    img:"/img/fc2.png",


    },
    {
    name:"lamborghini v520",
    price:"0",
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    img:"/img/fc3.png",


    },
    {
    name:"audi A3 sedan",
    price:"0",
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    img:"/img/fc4.png",


    },
    {
    name:"infiniti Z5",
    price:"0",
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    img:"/img/fc5.png",


    },
    {
    name:"porsche 718 cayman",
    price:"0",
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    img:"/img/fc6.png",


    },
    {
    name:"BMW 8-Series Coupe",
    price:"0",
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    img:"/img/fc7.png",


    },
    {
    name:"BMW Xseries-6",
    price:"0",
    description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    img:"/img/fc8.png",


    },
    
  ]
  const carmodels = [
    {
      imgc:'/img/ncm1.png',
      name:'chevrolet camaro ',
      description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
    imgc:'/img/ncm2.png',
    name:'BMW series-3 wagon',
    description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
    imgc:'/img/ncm3.png',
    name:'ferrari 488 superfast',
    description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    }
    
  ]
  
  const currentIndex = ref<number>(0);
  const touchStartX = ref<number>(0);
  const touchMoveX = ref<number>(0);


  function next() {
    currentIndex.value = (currentIndex.value + 1) % carmodels.length
  }
  
  function prev() {
    currentIndex.value = (currentIndex.value - 1 +  carmodels.length) %  carmodels.length
  }
  
  function handleTouchStart(event: TouchEvent) {
    touchStartX.value = event.touches[0].clientX
  }
  
  function handleTouchMove(event: TouchEvent) {
    touchMoveX.value = event.touches[0].clientX
  }
  
  function handleTouchEnd() {
    const deltaX = touchMoveX.value - touchStartX.value
    if (deltaX > 50) {
      prev()
    } else if (deltaX < -50) {
      next()
    }
    touchStartX.value = 0
    touchMoveX.value = 0
  }
  
  const startDragX = ref<number>(0)
  const endDragX = ref<number>(0)
  function handleMouseDown(event: MouseEvent) {
    startDragX.value = event.clientX
  }
  
  function handleMouseMove(event: MouseEvent) {
    endDragX.value = event.clientX
  }
  
  function handleMouseUp() {
    const deltaX = endDragX.value - startDragX.value
    if (deltaX > 50) {
      prev()
    } else if (deltaX < -50) {
      next()
    }
    startDragX.value = 0
    endDragX.value = 0
  }

  return{
    productcars,
    carmodels,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    currentIndex,
  }
  
}
})
 
</script>

<style scoped>

</style>
