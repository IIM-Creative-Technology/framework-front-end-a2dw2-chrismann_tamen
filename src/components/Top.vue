<script setup>
import Header from './Header.vue';
import SearchBar from './SearchBar.vue';
</script>

<template>
  <div class="top bg-cover bg-center">
    <Header />
    <h1 class="top__title px-4 md:px-6 xl:px-0 text-white text-3xl sm:text-6xl text-center pb-4">Découvrez nos formations sur étagère ! </h1>
    <p class="px-4 md:px-36 xl:px-72 text-white text-center">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>
    <SearchBar />
  </div>
</template>

<style scoped>
.top {
  background-image: url('./img/header/background.png');
  background-size: 100% 100%;
}

.top__title {
  font-family: 'NeuzeitBold';
}
</style>
