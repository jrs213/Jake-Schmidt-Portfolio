<script lang="ts" setup>

</script>


<template>

    <section
        class="min-h-screen flex justify-around items-center bg-gradient-to-b from-primary to-primaryDark text-white px-4">
        <div class="max-w-2xl w-full text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Hello World</h1>
            <h2 class="text-xl md:text-2xl font-medium mb-6 text-textMuted">Text</h2>
            <p class="mb-8 text-lg md:text-xl text-surface/80">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus architecto harum laborum dicta omnis quae nemo dignissimos sapiente deleniti! </p>
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