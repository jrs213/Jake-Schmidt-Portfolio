<script lang="ts" setup>
import { Send } from 'lucide-vue-next';

const formKey = import.meta.env.VITE_FORM_KEY;
</script>

<template>
    <section id="contact" class="w-full min-h-[80vh] flex items-center justify-center bg-primary py-16">
        <div class="w-full max-w-50vw bg-primaryDark/80 rounded-2xl  border border-accentGreen/30 p-8 md:p-12">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-white tracking-tight">
                Contact <span class="">Me</span>
            </h2>
            <form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col gap-5 text-white">
                <input type="hidden" name="access_key" :value="formKey">
                <label for="name" class="text-accentGreen font-semibold">Name</label>
                <input type="text" name="name" required
                    class="rounded-lg border border-accentGreen/40 px-4 py-2 bg-primary text-white focus:outline-none focus:border-accentGreen transition placeholder:text-slate-400"
                    placeholder="Your Name" />
                <label for="email" class="text-accentGreen font-semibold">Email</label>
                <input type="email" name="email" required
                    class="rounded-lg border border-accentGreen/40 px-4 py-2 bg-primary text-white focus:outline-none focus:border-accentGreen transition placeholder:text-slate-400"
                    placeholder="you@email.com" />
                <label for="message" class="text-accentGreen font-semibold">Message</label>
                <textarea name="message" required rows="5"
                    class="rounded-lg border border-accentGreen/40 px-4 py-2 bg-primary text-white focus:outline-none focus:border-accentGreen transition placeholder:text-slate-400"
                    placeholder="How can I help you?" />
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                <input type="hidden" name="redirect" value="/">
                <div class="flex justify-end mt-4">
                    <button type="submit"
                        class="bg-accentGreen text-primaryDark flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold shadow hover:bg-accentGreen/80 transition-all focus:ring-2 focus:ring-accentGreen/60 focus:ring-offset-2 glow-green">
                        Send
                        <Send />
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
section {

    background: var(--un-primary, #1e293b);
}

.shadow-2xl {
    box-shadow: 0 8px 32px 0 rgba(34, 197, 94, 0.10), 0 1.5px 6px 0 rgba(30, 41, 59, 0.10);
}

form input,
form textarea {
    font-size: 1rem;
}

form label {
    margin-bottom: 0.25rem;
}

button:focus {
    outline: none;
}


.glow-green {
    box-shadow: 0 0 16px 0 rgba(34, 197, 94, 0.25), 0 2px 8px 0 rgba(34, 197, 94, 0.10);
}
</style>