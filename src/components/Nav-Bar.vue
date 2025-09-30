<script setup lang="ts">

</script>

<template>
    <nav
        class="flex bg-primary-dark text-white text-sm sm:text-lg md:text-xl shadow-md justify-between items-center p-4 md:p-6 border-b-2 border-accentGreen glow-green">
        <div class="font-bold text-lg sm:text-xl">
            <h1>JRS213</h1>
        </div>
        <div class="hidden sm:flex items-center gap-4 md:gap-6">
            <a href="#projects" class="hover:text-accentGreen transition-colors">Projects</a>
            <a href="#contact" class="hover:text-accentGreen transition-colors">Contact</a>
            <a href="https://github.com/jrs213" target="_blank"
                class="hover:text-accentGreen transition-colors">Github</a>
            <a href="/resume.pdf" download="Jake_Schmidt_Resume.pdf"
                class="bg-accentGreen text-primary-dark px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base font-semibold hover:bg-accentGreen/80 transition glow-green">
                Resume
            </a>
        </div>
        <div class="sm:hidden flex items-center gap-3">
            <a href="/resume.pdf" download="Jake_Schmidt_Resume.pdf"
                class="bg-accentGreen text-primary-dark px-3 py-1.5 rounded text-sm font-semibold hover:bg-accentGreen/80 transition glow-green">
                Resume
            </a>
        </div>
    </nav>
</template>

<style scoped>
.glow-green {
    box-shadow: 0 0 16px 0 rgba(34, 197, 94, 0.25), 0 2px 8px 0 rgba(34, 197, 94, 0.10);
}
</style>
