<template>
    <footer class="w-full bg-primaryDark text-white py-8 border-t border-accentGreen/40">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
            <div class="text-lg font-semibold">&copy; {{ new Date().getFullYear() }} Jake Schmidt</div>
            <div class="flex gap-6 text-accentGreen">
                <a href="mailto:jakeschmidt213@email.com" class="hover:underline">Email</a>
                <a href="https://github.com/jrs213" target="_blank" rel="noopener" class="hover:underline">GitHub</a>
                <a href="/resume.pdf" download="Jake_Schmidt_Resume.pdf" class="hover:underline">Resume</a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
</script>
<style scoped></style>
