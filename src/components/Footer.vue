<script setup>

</script>

<template>
  <footer class="bg-footerBg text-white lg:px-20 lg:py-18">
    <div class="flex flex-col lg:flex-row lg:pb-24">
      <div class="mx-4 my-8 lg:m-0 lg:w-1/4 lg:mr-9">
        <img src="/img/header/Skillsday.png" alt="" class="lg:mb-4">
        <p class="text-xs">Skillsday est un organisme nouvelle génération qui a pour mission de moderniser et digitaliser la formation en entreprise pour former, vraiment !</p>
      </div>
      <div class="footer__cat bg-white/20 lg:bg-transparent px-4 lg:px-0 lg:mr-9 mb-2 lg:mb-0">
        <h4 class="cat__title lg:opacity-40">solutions <font-awesome-icon icon="fa-solid fa-chevron-down" class="lg:hidden"/></h4>
        <ul class="hidden lg:block">
          <li><a href="#">Développer les soft skills</a></li>
          <li><a href="#">Digitaliser les formations</a></li>
          <li><a href="#">Accompagner les déploiements</a></li>
        </ul>
      </div>
      <div class="footer__cat bg-white/20 lg:bg-transparent px-4 lg:px-0 lg:mr-9 mb-2 lg:mb-0">
        <h4 class="cat__title lg:opacity-40">formations <font-awesome-icon icon="fa-solid fa-chevron-down" class="lg:hidden"/></h4>
        <ul class="hidden lg:block">
          <li><a href="#">Toutes les formations</a></li>
          <li><a href="#">Télécharger le catalogue</a></li>
        </ul>
      </div>
      <div class="footer__cat bg-white/20 lg:bg-transparent px-4 lg:px-0 lg:mr-9 mb-2 lg:mb-0">
        <h4 class="cat__title lg:opacity-40">informations <font-awesome-icon icon="fa-solid fa-chevron-down" class="lg:hidden"/></h4>
        <ul class="hidden lg:block">
          <li><a href="#">Nous rejoindre</a></li>
          <li><a href="#">Nous contacter</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:items-end">
      <div class="footer__legals mx-4 my-8 lg:my-0">
        <span class="text-sm">©Skillsday 2022</span>
        <div class="flex flex-col lg:flex-row">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">CGV</a>
        </div>
      </div>
      <div class="footer__socials flex justify-center lg:w-fit h-fit mb-4 lg:mb-0">
        <a href="#" class="socials__social">
          <img src="/img/footer/insta.svg" alt="" class="footer__socials--img">
        </a>
        <a href="#" class="socials__social">
          <img src="/img/footer/linkedin.svg" alt="" class="footer__socials--img">
        </a>
        <a href="#" class="socials__social">
          <img src="/img/footer/Frame.svg" alt="" class="footer__socials--img">
        </a>
        <a href="#" class="socials__social">
          <img src="/img/footer/youtube.svg" alt="" class="footer__socials--img">
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.cat__title {
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.75rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer__cat ul li {
  font-weight: 600;
  font-size: 14px;
}
.footer__legals a{
  margin: 1rem 0;
  display: block;
  font-size: 14px;
}
.socials__social {
  background: rgba(255, 255, 255, 0.3);
  padding: 0.5rem;
  border-radius: 9999px;
  margin: 1rem 0.5rem;
}
.footer__socials--img {
  fill: white;
  width: 24px;
}
</style>
