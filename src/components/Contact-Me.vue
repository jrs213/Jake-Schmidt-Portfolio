<script lang="ts" setup>

</script>

<template>
    <h1>Contact Me</h1>
    <!-- <form class="flex flex-col max-w-md mx-auto space-y-4">
        <label for="name">Name:</label>
        <input class="rounded" type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input class="rounded" type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea class="rounded" id="message" name="message" rows="4" required></textarea>

        <button type="submit" class="btn-primary mt-4">Send</button>
    </form> -->
    <form action="https://api.web3forms.com/submit" method="POST">

        <!-- Replace with your Access Key -->
        <input type="hidden" name="access_key" value="{{ import.meta.env.FormKey }}">
        <!-- Form Inputs. Each input must have a name="" attribute -->
        <input type="text" name="name" required>
        <input type="email" name="email" required>
        <textarea name="message" required></textarea>
        <!-- Honeypot Spam Protection -->
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
        <!-- Custom Confirmation / Success Page -->
        <input type="hidden" name="redirect" value="https://google.com">
        <button type="submit">Submit Form</button>

    </form>
</template>

<style scoped></style>