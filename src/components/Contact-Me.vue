<script lang="ts" setup>
import { Send } from 'lucide-vue-next';

const formKey = import.meta.env.VITE_FORM_KEY;
</script>

<template>
    <h1>Contact Me</h1>
    <form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col gap-4 max-w-lg mx-auto">
        <input type="hidden" name="access_key" :value="formKey">
        <!-- Form Inputs. Each input must have a name="" attribute -->
        <label for="name">Name:</label>
        <input type="text" name="name" required>
        <label for="email">Email:</label>
        <input type="email" name="email" required>
        <label for="message">Message:</label>
        <textarea name="message" required></textarea>
        <!-- Honeypot Spam Protection -->
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
        <!-- Custom Confirmation / Success Page -->
        <input type="hidden" name="redirect" value="https://web3forms.com/success">
        <div class="flex justify-end">
            <button type="submit"
                class="bg-primary text-white flex items-center gap-2 px-4 py-2 rounded shadow hover:bg-primaryDark transition">
                Send
                <Send />
            </button>
        </div>

    </form>
</template>

<style scoped></style>