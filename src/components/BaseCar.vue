<template>
    <div class="pt-20 w-full flex flex-col items-center  lg:flex-row lg:justify-between lg:pt-8 lg:overflow-hidden lg:grow-0 shrink-0">
        <div class="w-2/3  lg:w-1/2 lg:ml-36">
            <img :src="imgc">
        </div>
        <div class="w-2/3 lg:w-72 lg:items-start space-y-4 lg:mr-36">
            <a href="#" class="text-3xl font-bold text-slate-600">{{ name }}</a>
            <p class="text-slate-500">
                {{ description }}
			</p>
            <button class="bg-blue-700 w-32 h-12 rounded-sm text-white">view detalis</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent , PropType} from 'vue'


export default defineComponent({
    name: 'BaseCar',
    props:{
        
        imgc:{
              type :Object as PropType<String>,
              required:true,
          },
        name:{
            type :Object as PropType<String>,
            required:true,
          },
        description:{
            type :Object as PropType<String>,
            required:true,
          },
    }

})
</script>

<style>

</style>