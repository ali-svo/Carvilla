<template>
  <section class=" bg-white mt-24 w-3/4 flex justify-center shadow-lg shadow-slate-600 py-6">
    <div class="w-full flex flex-col lg:flex lg:flex-row">
        <div class="px-4">
            <label class="flex flex-col lg:ml-4 mb-2 lg:mb-0">
                select year
            </label>
            <select class="w-full h-10 mb-4 bg-slate-100 rounded-sm text-slate-400 lg:w-40 lg:h-14 lg:m-4">
                <option>year</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
            </select>
       
            <label class="flex flex-col lg:ml-4 mb-2 lg:mb-0">
                body-style
            </label>
            <select  class="w-full h-10 mb-4 bg-slate-100 rounded-sm text-slate-400 lg:w-40 lg:h-14 lg:m-4">
                <option>style</option>
                <option value="sedan">sedan</option>
                <option value="van">van</option>
                <option value="roadster">roadste</option>
            </select>
        </div>
        <div class="px-4">
            <label class="flex flex-col lg:ml-4 mb-2 lg:mb-0">
                select make
            </label>
            <select  class="w-full h-10 mb-4 bg-slate-100 rounded-sm text-slate-400 lg:w-40 lg:h-14 lg:m-4">
                <option>make</option>
                <option value="toyota">toyota</option>
                <option value="holden">holden</option>
                <option value="maesedec-benz">maesedec-benz</option>
            </select>
            <label class="flex flex-col lg:ml-4 mb-2 lg:mb-0">
                car-condition
            </label>
            <select class="w-full h-10 mb-4 bg-slate-100 rounded-sm text-slate-400 lg:w-40 lg:h-14 lg:m-4">
                <option>condition</option>
                <option value="somthing">somthing</option>
                <option value="somthing">somthing</option>
                <option value="somthing">somthing</option>
            </select>
        </div>
        <div class="px-4">
            <label class="flex flex-col lg:ml-4 mb-2 lg:mb-0">
                select model
            </label>
            <select class="w-full h-10 mb-4 bg-slate-100 rounded-sm text-slate-400 lg:w-40 lg:h-14 lg:m-4">
                <option>model</option>
                <option value="kiario">kiario</option>
                <option value="mitsubishi">mitsubish</option>
                <option value="ford">ford</option>
            </select>
     
            <label class="flex flex-col lg:ml-4 mb-2 lg:mb-0">
                price
            </label>
            <select class="w-full h-10 mb-4 bg-slate-100 rounded-sm text-slate-400 lg:w-40 lg:h-14 lg:m-4">
                <option>price</option>
                <option value="">$0.00</option>
                <option value="">$0.00</option>
                <option value="">$0.00</option>
            </select>
        </div>
        <div class="flex justify-center items-center bg-blue-600 w-32 h-14 mx-auto lg:mt-20 lg:ml-4 lg:mr-4 rounded-sm">
            <button class="text-white">search</button>
        </div>
    </div>
  </section>
  <section class="flex flex-col space-y-4 items-center mt-10 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-4">
    <div class="border-2 border-slate-300 w-60 h-80 rounded-md group hover:bg-blue-500 hover:border-blue-500 shadow-lg shadow-sky-950">
        <div class="flex flex-col items-center">
            <img src="../assets/images.png" class="size-36">
            <a href="#" class="font-bold group-hover:text-white">largest dalership of car</a>
            <span class="text-center text-slate-400 mt-4 group-hover:text-white">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</span>
            <p class="border-b-2 border-blue-700 w-8 mt-8"></p>
        </div>
    </div>
    <div class="border-2 border-slate-300 w-60 h-80 rounded-md group hover:bg-blue-500 hover:border-blue-500 shadow-lg shadow-sky-950">
        <div class="flex flex-col items-center">
            <img src="../assets/images (3).png" class="size-36">
            <a href="#" class="font-bold group-hover:text-white">unlimited repaire warrenty</a>
            <span class="text-center text-slate-400 mt-4 group-hover:text-white">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</span>
            <p class="border-b-2 border-blue-700 w-8 mt-8 "></p>
        </div>
    </div>
    <div class="border-2 border-slate-300 w-60 h-80 rounded-md group hover:bg-blue-500 hover:border-blue-500 shadow-lg shadow-sky-950">
        <div class="flex flex-col items-center">
            <img src="../assets/car 4.jpg" class="size-36">
            <a href="#" class="font-bold group-hover:text-white">insorence support</a>
            <span class="text-center text-slate-400 mt-4 group-hover:text-white">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</span>
            <p class="border-b-2 border-blue-700 w-8 mt-8"></p>
        </div>
    </div>
  </section>
</template>

<script lang="ts">

export default {
    name: 'BaseSelection',
    

}
</script>

<style>

</style>