<script setup>
</script>

<template>
  <div class="searchBar sm:mx-auto sm:flex bg-white py-6 px-8 rounded-3xl translate-y-1/2 w-auto sm:w-fit mx-4 mb-[83px] sm:mb-[52px]">
    <div class="searchBar__inputContainer sm:mr-8 relative mb-4 sm:mb-0">
      <input type="text" name="" id="" class="bg-bgCta py-4 px-6 rounded-full w-full sm:w-[50vw]" placeholder="Quelle formation recherchez-vous ?">
      <span class="absolute right-4 bottom-1/2 translate-y-1/2">🔍</span>
    </div>

    <div class="searchBar__inputContainer relative flex items-center">
      <p class="bg-bgCta py-4 px-6 rounded-full w-full sm:w-fit flex justify-between items-center">
        Filtrer
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="ml-1"/>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
