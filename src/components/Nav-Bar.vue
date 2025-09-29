<script setup lang="ts">

</script>

<template>
    <!-- * TODO *
UPDATE:
     Font size and other text decorations
ADD:
     Links to the section
     Hover effects
     Active link indicator
-->
    <div
        class="flex bg-primary-dark text-white text-xl shadow-md justify-between items-center p-6 border-b-2 border-accentGreen glow-green">
        <div class="font-bold">
            <h1>JRS213</h1>
        </div>
        <div class="flex justify-around items-center w-1/2 gap-0">
            <a href="#projects" class="hover:text-accentGreen transition-colors">Projects</a>
            <a href="#contact" class="hover:text-accentGreen transition-colors">Contact</a>
            <a href="https://github.com/jrs213" target="_blank"
                class="hover:text-accentGreen transition-colors">Github</a>
            <a href="/resume.pdf" download="Jake_Schmidt_Resume.pdf"
                class="bg-accentGreen text-primary-dark px-4 py-2 rounded font-semibold hover:bg-accentGreen/80 transition glow-green">
                Resume
            </a>
        </div>
    </div>
</template>

<style scoped>
.glow-green {
    box-shadow: 0 0 16px 0 rgba(34, 197, 94, 0.25), 0 2px 8px 0 rgba(34, 197, 94, 0.10);
}
</style>
