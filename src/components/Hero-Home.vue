<script lang="ts" setup>

</script>


<template>

    <section
        class="h-60vh flex justify-around items-center bg-gradient-to-b from-primary to-primaryDark text-white px-4">
        <div class="max-w-2xl w-full">
            <h1 class="text-4xl font-bold text-start mb-4 drop-shadow-lg">Hi, I'm</h1>
            <h2 class="text-8xl font-bold text- mb-6 text-textMuted">Jake Schmidt</h2>
            <p class="mb-8 text-lg md:text-xl text-surface/80">A web developer specializing in building exceptional
                digital experiences. </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
        </div>
        <div class="">
            <img src="https://placehold.co/600x400" alt="Hero Image" class="w-full max-w-md rounded-lg shadow-lg ml-8">
        </div>
    </section>

</template>

<style scoped>
.btn-primary {
    @apply bg-primary text-white px-6 py-3 rounded font-semibold shadow hover:bg-primaryDark transition;
}

.btn-secondary {
    @apply bg-surface text-primary border border-primary px-6 py-3 rounded font-semibold shadow hover:bg-primary/10 transition;
}
</style>