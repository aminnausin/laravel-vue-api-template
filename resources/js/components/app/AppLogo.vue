<script setup lang="ts">
import AppLogoIcon from '@/components/app/AppLogoIcon.vue';

withDefaults(
    defineProps<{
        useIcon?: boolean;
    }>(),
    { useIcon: true },
);
</script>

<template>
    <div class="flex flex-1 items-center gap-1 text-left text-sm">
        <slot v-if="useIcon" name="icon">
            <div class="flex aspect-square size-8 items-center justify-center rounded-md">
                <AppLogoIcon class="size-5 fill-current text-black dark:text-white" />
            </div>
        </slot>
        <slot>
            <span class="truncate leading-tight font-semibold">ARC Resume Builder</span>
        </slot>
    </div>
</template>
