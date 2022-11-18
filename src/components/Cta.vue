<template>
    <div class="sm:w-1/2 w-full bg-bgCta flex flex-col items-center justify-center text-center py-8 rounded-2xl my-16">
        <h3 class="font-bold text-2xl gradientOn">C'est votre dernier mot ?</h3>
        <p class="w-full sm:w-96">Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous.</p>
        <div class="flex flex-col sm:px-0 px-8 sm:flex-row gap-8 w-full justify-center mt-6">
            <a class="font-bold text-white bg-cta p-3 rounded-full border-2 border-solid border-cta" href="#">Je prends contact</a>
            <a class="font-bold p-3 border-gradient" href="#">Télécharger le catalogue</a>
        </div>
    </div>
</template>

<style scoped>
    /* background: linear-gradient(to right, rgba(128, 212, 248, 1) 0%, rgba(141, 78, 216, 1) 25%, rgba(255, 106, 96, 1) 75%, rgba(252, 22, 22, 1) 100%) border-box; */
.border-gradient{
    background: linear-gradient(#F3EDFB, #F3EDFB) padding-box,
    linear-gradient(to right, rgba(128, 212, 248, 1) 0%, rgba(141, 78, 216, 1) 25%, rgba(255, 106, 96, 1) 75%, rgba(252, 22, 22, 1) 100%) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
}

.gradientOn{
    background: linear-gradient(to right, rgba(128, 212, 248, 1) 0%, rgba(141, 78, 216, 1) 25%, rgba(255, 106, 96, 1) 75%, rgba(252, 22, 22, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>