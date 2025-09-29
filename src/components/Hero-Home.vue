<script lang="ts" setup>

</script>


<template>

    <section class="min-h-screen flex flex-col md:flex-row justify-center items-center bg-primary px-4 py-8 md:gap-16 gap-8">
        <div class="max-w-lg w-full flex flex-col items-start justify-center text-center md:text-left">
            <span class="text-lg sm:text-xl md:text-2xl text-accentGreen mb-2">Hi, I'm</span>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white">Jake Schmidt</h1>
            <p class="mb-8 text-base sm:text-lg md:text-xl text-accentGreen">I'm a web developer based in Arizona, passionate about
                building exceptional digital experiences for the modern web.</p>
            <a href="#contact"
                class="bg-accentGreen text-primaryDark px-6 py-3 rounded font-semibold shadow hover:bg-accentGreen/80 transition glow-green">Contact
                Me</a>
        </div>
        <div class="flex justify-center items-center w-full md:w-auto mt-8 md:mt-0">
            <img src="../assets/me.png" alt="Hero Image"
                class="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full shadow-lg border-0 border-accentGreen object-cover bg-surface glow-green" />
        </div>
    </section>

</template>

<style scoped>
.glow-green {
    box-shadow: 0 0 16px 0 rgba(34, 197, 94, 0.25), 0 2px 8px 0 rgba(34, 197, 94, 0.10);
}
</style>
