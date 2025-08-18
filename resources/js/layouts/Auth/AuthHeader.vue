<script setup lang="ts">
import AppLogo from '@/components/app/AppLogo.vue';
const title = 'APP NAME';
</script>

<template>
    <div class="flex flex-col items-center gap-1 px-6 pt-8 text-center sm:justify-start sm:pt-0">
        <router-link class="mb-1 flex h-9 items-center justify-center rounded-md text-[var(--foreground)] dark:text-white" to="/">
            <AppLogo>
                <h1 class="text-2xl tracking-wider">LARAVEL</h1>
            </AppLogo>
        </router-link>
        <span class="sr-only">{{ title }}</span>
        <slot name="subtext">
            <p class="max-w-60 text-neutral-500 sm:max-w-none dark:text-neutral-400">
                <slot> </slot>
            </p>
        </slot>
    </div>
</template>
