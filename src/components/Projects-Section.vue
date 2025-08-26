<script lang="ts" setup>

</script>

<template>
    <section
        class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
        <h2 class="text-4xl font-bold mb-8">Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold mb-4">Frontend</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>Vue.js, React</li>
                    <li>Tailwind CSS, Bootstrap</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold mb-4">Backend</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Node.js, Express.js</li>
                    <li>RESTful APIs</li>
                    <li>Database Management (MongoDB, SQL)</li>
                    <li>Authentication & Authorization</li>
                </ul>
            </div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-semibold mb-4">DevOps & Tools</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Git & GitHub</li>
                    <li>Docker & Kubernetes</li>
                    <li>CI/CD Pipelines</li>
                    <li>Cloud Services (AWS, Azure)</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped></style>