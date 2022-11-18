<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Top from './components/Top.vue'
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Top />
  <main class="flex flex-col sm:w-full w-fit sm:px-32 px-8">
    <section class="flex flex-col my-8 items-center sm:w-full w-fit">
      <div class="flex flex-row w-full place-content-between">
        <h2 class="font-bold uppercase">LES PLUS POPULAIRES 🔥</h2>
        <div class="flex flex-row gap-5">
          <img src="../public/img/wrapper/Vector2.png" alt="Flèche précédant">
          <img src="../public/img/wrapper/Vector1.png" alt="Flèche Suivant">
        </div>
      </div>
      <div class="grid w-full sm:gap-14 sm:grid-cols-4 grid-rows-1 my-4">
        <div class="flex justify-center row-start-1 row-end-2 col-start-1 col-end-2">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Management & Leadership' thumbnail="./public/img/cards/8.png" thumbnailAlt="Main qui tient un avion" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-1 row-end-2 col-start-2 col-end-3">
          <Card class='hidden sm:block' title="Accueillir un.e collègue en situation de handicap" theme='Vente' thumbnail="./public/img/cards/5.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-1 row-end-2 col-start-3 col-end-4">
          <Card class='hidden sm:block' title="Accueillir un.e collègue en situation de handicap" theme='RH, QVT & diversité' thumbnail="./public/img/cards/10.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-1 row-end-2 col-start-4 col-end-5">
          <Card class='hidden sm:block' title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/3.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
      </div>
    </section>

    <section class="flex flex-col my-8">
      <h2 class="font-bold uppercase">Toutes les formations 🚀</h2>
      <div class="flex flex-col sm:grid w-full gap-4 sm:gap-14 sm:grid-cols-4 sm:grid-rows-3 my-4">

        <div class="flex justify-center row-start-1 row-end-2 col-start-1 col-end-2">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/12.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-1 row-end-2 col-start-2 col-end-3">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/7.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-1 row-end-2 col-start-3 col-end-4">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/14.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-1 row-end-2 col-start-4 col-end-5">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/1.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-2 row-end-3 col-start-1 col-end-2">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/5.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-2 row-end-3 col-start-2 col-end-3">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/6.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-2 row-end-3 col-start-3 col-end-4">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/15.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-2 row-end-3 col-start-4 col-end-5">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/9.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-3 row-end-4 col-start-1 col-end-2">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/13.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'},{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-3 row-end-4 col-start-2 col-end-3">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/16.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-3 row-end-4 col-start-3 col-end-4">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/11.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
        <div class="flex justify-center row-start-3 row-end-4 col-start-4 col-end-5">
          <Card title="Accueillir un.e collègue en situation de handicap" theme='Thématique 1' thumbnail="./public/img/cards/2.png" thumbnailAlt="alt" :btns="[{'linkBtn':'#', 'contentBtn':'👨‍🏫'}]" />
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<style scoped>

</style>
