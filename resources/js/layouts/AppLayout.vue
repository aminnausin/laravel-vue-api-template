<script setup lang="ts">
import type { BreadcrumbItemType } from '@/types';

import AppLayout from '@/layouts/app/AppHeaderLayout.vue';
import AppSidebarLayout from './app/AppSidebarLayout.vue';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <AppSidebarLayout :breadcrumbs="breadcrumbs">
        <slot />
    </AppSidebarLayout>
</template>
