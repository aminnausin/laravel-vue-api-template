<script setup lang="ts">
import AppLogoIcon from '@/components/inertia/AppLogoIcon.vue';
const title = 'APP NAME';
</script>

<template>
    <div class="flex flex-col items-center gap-1 px-6 pt-8 text-center sm:justify-start sm:pt-0">
        <h1 class="px-4 text-2xl tracking-wider">APP NAME</h1>
        <div class="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
            <AppLogoIcon class="size-9 fill-current text-[var(--foreground)] dark:text-white" />
        </div>
        <span class="sr-only">{{ title }}</span>
        <slot name="subtext">
            <p class="max-w-60 text-neutral-500 sm:max-w-none dark:text-neutral-400">
                <slot> </slot>
            </p>
        </slot>
    </div>
</template>
