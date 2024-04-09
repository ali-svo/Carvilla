<template>
    <button
      id="scrollToTopBtn"
      class="group fixed bottom-5 right-5 z-10 border-2 border-blue-600 rounded-full text-white bg-banafh p-4 hover:text-blue-600 transition-all"
      v-show="showButton"
      @click="scrollToTop"
    >
     <img class="w-3 h-3" src="/img/tt.png" alt="">
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from "vue";
  
  const showButton = ref<boolean>(false);
  
  const handleScroll = (): void => {
    //window.pageYOffset
    if (window.scrollY > 20) {
      showButton.value = true;
    } else {
      showButton.value = false;
    }
  };
  
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  onMounted((): void => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onBeforeUnmount((): void => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  