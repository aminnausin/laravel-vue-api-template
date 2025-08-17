<script setup lang="ts">
import type { BreadcrumbItemType } from '@/types';

import AppHeader from './AppHeader.vue';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <AppHeader />

    <main
        class="bg-primary-900 dark:bg-primary-dark-900 sm:bg-primary-950 sm:dark:bg-primary-dark-950 grid snap-y grid-cols-1 gap-3 overflow-x-clip p-6 pt-3 text-gray-900 antialiased sm:gap-6 sm:pt-6 md:h-auto lg:grid-cols-10 2xl:grid-cols-6 dark:text-white"
    >
        <slot />
    </main>
</template>
