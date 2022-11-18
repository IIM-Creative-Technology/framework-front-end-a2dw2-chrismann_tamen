<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>
import CardBtn from "./CardBtn.vue";
</script>
<template>
    <div class="flex flex-row gap-4 w-full items-center h-8">
        <CardBtn class="text-minBtn minSize" linkBtn="#" contentBtn="1" />
        <a class='opacity-50 font-bold' href="#">2</a>
        <a class='opacity-50 font-bold' href="#">3</a>
        <a class='opacity-50 font-bold' href="#">4</a>
        <a class='opacity-50 font-bold' href="#">...</a>
        <a class='opacity-50 font-bold' href="#">8</a>
    </div>
</template>

<style scoped>
.minSize{
    height: 30px;
    width: 30px;
}
</style>