<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->
<script setup>
defineProps(['linkBtn','contentBtn'])
</script>

<template>
    <a class="flex items-center justify-center border-2 rounded-full border-minBtn minBtn border-solid text-xl" :href=linkBtn > {{contentBtn}} </a>
</template>
