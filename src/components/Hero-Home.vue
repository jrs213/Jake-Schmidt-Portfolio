<script lang="ts" setup>

</script>


<template>

    <section class="min-h-60vh flex flex-col md:flex-row justify-center items-center bg-primary px-4 md:gap-16 gap-8">
        <div class="max-w-60vw w-full flex flex-col items-start justify-center">
            <span class="text-xl md:text-2xl text-accentGreen mb-2">Hi, I'm</span>
            <h1 class="text-5xl md:text-7xl font-extrabold mb-4 text-white">Jake Schmidt</h1>
            <p class="mb-8 text-lg md:text-xl text-accentGreen">I'm a web developer based in Arizona, passionate about
                building exceptional digital experiences for the modern web.</p>
            <a href="#contact"
                class="bg-accentGreen text-primaryDark px-6 py-3 rounded font-semibold shadow hover:bg-accentGreen/80 transition glow-green">Contact
                Me</a>
        </div>
        <div class="flex justify-center items-center w-full md:w-auto mt-8 md:mt-0 pl-0 md:pl-8">
            <img src="../assets/me.png" alt="Hero Image"
                class="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg border-0 border-accentGreen object-cover bg-surface glow-green" />
        </div>
    </section>

</template>

<style scoped>
.glow-green {
    box-shadow: 0 0 16px 0 rgba(34, 197, 94, 0.25), 0 2px 8px 0 rgba(34, 197, 94, 0.10);
}
</style>
