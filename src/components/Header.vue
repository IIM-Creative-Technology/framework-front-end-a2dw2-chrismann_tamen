<script setup>
import Nav from './Nav.vue'
</script>

<template>
  <header class="px-4 sm:px-20 mb-12 h-8 sm:h-fit flex items-center justify-between relative">
    <div class="flex h-full">
      <a href="#" class="mr-10 flex items-center">
        <img src="./../assets/img/header/logo.png" alt="" class="hidden lg:block" style="min-height: 19px;min-width: 150px;">
        <img src="./../assets/img/header/Skillsday.png" alt="" class="lg:hidden">
      </a>
      <Nav current="Formations" />
    </div>
    <div class="burger__btn lg:hidden"></div>
    <div class="contact  hidden lg:block">
      <a href="#" class="text-white font-semibold px-6 py-4 bg-white bg-opacity-30 rounded-full mr-6 inline-block">
        06 74 49 03 21
      </a>
      <a href="#" class="text-cta font-semibold rounded-full bg-white px-6 py-4 inline-block">
        Je prends contact
      </a>
    </div>
  </header>
</template>

<style scoped>
.burger__btn {
  width: 28px;
  border-top: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  border-radius: 9999px;
  position: relative;
  right: 0;
}
.burger__btn::before,
.burger__btn::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 28px;
  transform: translateY(-12px);
  border-top: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  border-radius: 9999px;
}

.burger__btn::after {
  width: 22px;
  transform: translateY(8px);
}
</style>
