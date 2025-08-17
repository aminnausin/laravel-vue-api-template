<script setup lang="ts">
import AuthCard from './Auth/AuthCard.vue';
import AuthHeader from './Auth/AuthHeader.vue';

defineProps<{ heading?: string }>();
</script>

<template>
    <main
        class="m-auto flex min-h-screen flex-col items-center bg-white pt-6 text-sm sm:justify-center sm:gap-6 sm:bg-gray-100 sm:pt-0 dark:bg-neutral-800 dark:text-[#e2e0e2] sm:dark:bg-[#121216]"
    >
        <AuthHeader class="whitespace-pre-wrap">{{ heading }}</AuthHeader>
        <AuthCard>
            <slot />
        </AuthCard>
    </main>
</template>
