<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { cn } from '@aminnausin/cedar-ui';

import AppLogoIcon from '@/components/app/AppLogoIcon.vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div class="flex aspect-square size-8 items-center justify-center rounded-md">
        <AppLogoIcon class=":text-black size-5 fill-current dark:text-white" />
    </div>
    <div class="ml-1 grid flex-1 text-left text-sm">
        <slot>
            <span class="mb-0.5 truncate leading-tight font-semibold">ARC Resume Builder</span>
        </slot>
    </div>
</template>
