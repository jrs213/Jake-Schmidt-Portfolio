<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <section class="skills-section py-16 bg-primaryDark text-white">
        <h2 class="text-3xl font-bold mb-8 text-accentGreen text-center">Skills & Technologies</h2>
        <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-70vw mx-auto text-center">
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:vuedotjs"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">Vue.js</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:tailwindcss"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">Tailwind CSS</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:sap"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">SAP Commerce Cloud</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:html5"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">HTML5</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:nodedotjs"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">Node.js</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:express"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">Express.js</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:npm"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">npm</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:unocss"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">UnoCSS</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:contentful"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">Contentful</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:javascript"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">JavaScript</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:bootstrap"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">Bootstrap</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:jest"
                    class="text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2">Jest</span>
            </div>

        </div>
    </section>
</template>

<style scoped>
.green-glow:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 8px #22c55e75);
}
</style>