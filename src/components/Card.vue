<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>
import CardBtn from "./CardBtn.vue";
defineProps(['theme','thumbnail','thumbnailAlt','title', 'btns'])
</script>

<template>
  <div class=" block w-1/5 cardW cardH rounded-3xl shadow-xl">
    <img class="object-cover h-48 w-full rounded-t-3xl" :src=thumbnail  :alt=thumbnailAlt>
      <div class="place-content-between flex h-40 flex-col p-2">
        <div class="flex flex-col gap-2">
          <p class="text-xs">{{theme}}</p>
          <p class="font-bold text-lg">{{title}}</p>
        </div>
        <div class="flex flex-row w-full gap-3">
          <CardBtn v-for="btn in btns" :linkBtn=btn.linkBtn :contentBtn=btn.contentBtn />
        </div>
      </div>
  </div>
</template>

<style scoped>
.cardH{
  height: 355px;
}
.cardW{
  width: 298px;
}
.border-minBtn{
  border-color: minBtn;
}
.minBtn{
  width: 45px;
  height: 45px;
}
</style>