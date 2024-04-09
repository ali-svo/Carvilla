<template>
  <section class="mt-10">
    <div class="w-72 h-72 border-2 border-blue-600 rounded-sm hover:bg-blue-100 shadow-lg shadow-blue-950">
      <div class="flex justify-center pt-4">
        <img :src="imgCar" alt="">
      </div>
      <div class="border-t-2 border-blue-600 mt-24 pt-4">
        <p class="text-center">
          model:217 
          <span>3100 Mi</span>
          <span>240HP</span>
          automatic
        </p>
      </div>
    </div>
    <div class="text-start w-72 space-y-4 mt-3">
      <a href="#">{{ name }}</a>
      <p>${{ price }}</p>
      <p class="text-gray-500">{{ description }}</p>
    </div>
  </section>
</template>

<script  lang="ts">
import { PropType, defineComponent } from "vue";


export default defineComponent({
name:"BaseProudact",
    props:{
        name:{
              type :Object as PropType<String>,
              required:true,
          },
          price:{
            type :Object as PropType<String>,
            required:true,

          },
          description:{
            type :Object as PropType<String>,
            required:true,


          },
          imgCar:{
            type :Object as PropType<String>,
            required:true,

          },
         
      }
})


</script>

<style>

</style>