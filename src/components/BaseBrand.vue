<template>
    <div class="logos md:container mx-auto  space-x-8 my-12">
        <div class="logos-slide space-x-10">
          <a href=""><img src="/img/br1.png" alt="" /></a>
          <a href=""><img src="/img/br2.png" alt="" /></a>
          <a href=""><img src="/img/br3.png" alt="" /></a>
          <a href=""><img src="/img/br4.png" alt="" /></a>
          <a href=""><img src="/img/br5.png" alt="" /></a>
          <a href=""><img src="/img/br6.png" alt="" /></a>
        </div>
        <div class="logos-slide space-x-10">
          <a href=""><img src="/img/br1.png" alt="" /></a>
          <a href=""><img src="/img/br2.png" alt="" /></a>
          <a href=""><img src="/img/br3.png" alt="" /></a>
          <a href=""><img src="/img/br4.png" alt="" /></a>
          <a href=""><img src="/img/br5.png" alt="" /></a>
          <a href=""><img src="/img/br6.png" alt="" /></a>
        </div>
  </div>
  </template>
  
<script lang="ts">
export default{
    name:'BaseBrand',
}
 
  

  </script>
  
<style scoped>
*{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

@keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .logos:hover .logos-slide {
    animation-play-state: paused;
  }
  .logos {
    overflow: hidden;
    padding: 60px 0;
    white-space: nowrap;
    position: relative;
  }
  .logos:before,
  .logos:after {
    position: absolute;
    top: 0;
  
    width: 100px;
    height: 100%;
  
    content: "";
    z-index: 2;
  }
  .logos:before {
    left: 0;
  
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }
  .logos:after {
    right: 0;
  
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  }
  .logos-slide {
    display: inline-flex;
    animation: 25s slide infinite linear;
  }
  .logos-slide img {
    height: 100px;
    margin: 0 40px;
  }

</style>
  