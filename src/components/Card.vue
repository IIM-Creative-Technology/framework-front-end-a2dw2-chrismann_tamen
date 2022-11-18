<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['theme','thumbnail','thumbnailAlt','title'])
</script>

<template>
  <div class=" flex items-center flex-col w-1/6 cardH rounded-3xl shadow-xl">
    <img class="object-cover w-full rounded-t-3xl" v-bind:src=thumbnail  v-bind:alt=thumbnailAlt>
      <div class="justify-center h-full flex flex-col p-2">
        <p class="text-xs">{{theme}}</p>
        <p class="font-bold text-lg">{{title}}</p>
        <div class="flex flex-row w-full gap-3">
          <a class="flex items-center justify-center border-2 rounded-full border-minBtn minBtn border-solid text-xl" href="#">👨‍🏫</a>
        </div>
      </div>
  </div>
</template>

<style scoped>
.cardH{
  height: 400px;
}
.border-minBtn{
  border-color: minBtn;
}
.minBtn{
  width: 45px;
  height: 45px;
}
</style>