<script setup lang="ts">
import type { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/AppLayout.vue';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/',
    },
];
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs"> Laravel Vue-API Template </AppLayout>
</template>
