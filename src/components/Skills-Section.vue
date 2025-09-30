<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <section class="skills-section py-12 md:py-16 bg-primaryDark text-white px-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-accentGreen text-center">Skills & Technologies
        </h2>
        <div
            class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto text-center">
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:vuedotjs"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">Vue.js</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:tailwindcss"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">Tailwind CSS</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:sap"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">SAP Commerce Cloud</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:html5"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">HTML5</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:nodedotjs"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">Node.js</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:express"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">Express.js</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:npm"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">npm</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:unocss"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">UnoCSS</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:contentful"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">Contentful</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:javascript"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">JavaScript</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:bootstrap"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">Bootstrap</span>
            </div>
            <div class="flex flex-col items-center">
                <Icon icon="simple-icons:jest"
                    class="text-4xl sm:text-5xl md:text-6xl mb-2 text-textMuted hover:text-accentGreen transition-colors transition-transform duration-200 ease-in-out green-glow" />
                <span class="mt-2 text-sm sm:text-base">Jest</span>
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