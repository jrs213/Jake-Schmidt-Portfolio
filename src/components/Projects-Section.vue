<script lang="ts" setup>

</script>

<template>
    <section id="projects" class="flex flex-col justify-center items-center bg-primary text-white py-12 md:py-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accentGreen">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 w-full px-4 max-w-7xl">
            <div
                class="bg-primaryDark p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-b-4 border-accentGreen flex flex-col items-start">
                <img src="../assets/WeatherDashboard.png" alt="Weather Dashboard screenshot"
                    class="rounded-lg mb-4 w-full aspect-video object-fit border border-accentGreen/30">
                <h3 class="text-xl md:text-2xl font-semibold mb-2 text-accentGreen">Weather Dashboard</h3>
                <p class="mb-4 text-textMuted">A clean, modern weather application built with Vue 3 and TypeScript that
                    displays current weather conditions and 7-day forecasts for any city worldwide.</p>
                <ul class="list-disc list-inside space-y-1 text-textMuted text-base mb-4">
                    <li>Vue 3 & TypeScript</li>
                    <li>OpenWeatherMap API</li>
                    <li>Responsive Design</li>
                </ul>
                <a href="https://github.com/jrs213/Weather-Dashboard" target="_blank" rel="noopener"
                    class="mt-auto bg-accentGreen text-primaryDark px-4 py-2 rounded font-semibold shadow hover:bg-accentGreen/80 transition glow-green">View
                    Project</a>
            </div>
            <div
                class="bg-primaryDark p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-b-4 border-accentGreen flex flex-col items-start">
                <img src="../assets/todoList.png" alt="Todo list screenshot"
                    class="rounded-lg mb-4 w-full aspect-video object-fit border border-accentGreen/30">
                <h3 class="text-2xl font-semibold mb-2 text-accentGreen">Todo List</h3>
                <p class="mb-4 text-textMuted">A simple full-stack Todo List application built with Vue 3, Vite, Remult,
                    and Express.</p>
                <ul class="list-disc list-inside space-y-1 text-textMuted text-base mb-4">
                    <li>Vue 3 & Vite</li>
                    <li>Remult & Express</li>
                    <li>CRUD Functionality</li>
                </ul>
                <a href="https://github.com/jrs213/Task-List" target="_blank" rel="noopener"
                    class="mt-auto bg-accentGreen text-primaryDark px-4 py-2 rounded font-semibold shadow hover:bg-accentGreen/80 transition glow-green">View
                    Project</a>
            </div>
            <div
                class="bg-primaryDark p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-b-4 border-accentGreen flex flex-col items-start">
                <img src="../assets/tempWizard.png" alt="tempWizardt screenshot"
                    class="rounded-lg mb-4 w-full aspect-video object-cover border border-accentGreen/30">
                <h3 class="text-2xl font-semibold mb-2 text-accentGreen">tempWizard</h3>
                <p class="mb-4 text-textMuted">A lightweight JavaScript NPM package for seamless temperature conversions
                    between Celsius and Fahrenheit.</p>
                <ul class="list-disc list-inside space-y-1 text-textMuted text-base mb-4">
                    <li>TypeScript & NPM Package</li>
                    <li>Zero Dependencies</li>
                    <li>High Precision Conversions</li>
                </ul>
                <a href="https://github.com/jrs213/tempWizard-NPM" target="_blank" rel="noopener"
                    class="mt-auto bg-accentGreen text-primaryDark px-4 py-2 rounded font-semibold shadow hover:bg-accentGreen/80 transition glow-green">View
                    Project</a>
            </div>
            <div
                class="bg-primaryDark p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-b-4 border-accentGreen flex flex-col items-start">
                <img src="../assets/PasswordGen.png" alt="Password Generator screenshot"
                    class="rounded-lg mb-4 w-full aspect-video object-cover border border-accentGreen/30">
                <h3 class="text-2xl font-semibold mb-2 text-accentGreen">Password Generator</h3>
                <p class="mb-4 text-textMuted">A secure, client-side password generator built with pure HTML, CSS, and
                    JavaScript featuring customizable parameters for length, character types, and complexity
                    requirements.</p>
                <ul class="list-disc list-inside space-y-1 text-textMuted text-base mb-4">
                    <li>Vanilla HTML/CSS/JS</li>
                    <li>Customizable Parameters</li>
                    <li>Client-Side Security</li>
                </ul>
                <a href="https://github.com/jrs213/Password-Generator" target="_blank" rel="noopener"
                    class="mt-auto bg-accentGreen text-primaryDark px-4 py-2 rounded font-semibold shadow hover:bg-accentGreen/80 transition glow-green">View
                    Project</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.glow-green {
    box-shadow: 0 0 16px 0 rgba(34, 197, 94, 0.25), 0 2px 8px 0 rgba(34, 197, 94, 0.10);
}
</style>