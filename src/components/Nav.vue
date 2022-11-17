<script setup>
  const props = defineProps(['current'])
  let Offres = props.current === "Offres";
  let formation = props.current === "Formations";
  let Ressources = props.current === "Ressources";
  let propos = props.current === "propos";
</script>

<template>
  <nav class="hidden lg:block">
    <ul class="flex gap-2">
      <li :class="{ active: Offres }" class="text-white">Offres</li>
      <li :class="{ active: formation }" class="text-white">Formations</li>
      <li :class="{ active: Ressources }" class="text-white">Ressources</li>
      <li :class="{ active: propos }" class="text-white">À propos</li>
    </ul>
  </nav>
</template>

<style scoped>
  .active {
    font-weight: 700;
  }
</style>
