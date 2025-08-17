<script setup lang="ts">
import type { ToastPostion } from '@aminnausin/cedar-ui';

import { onMounted, onUnmounted, ref } from 'vue';
import { RouterView } from 'vue-router';

import { getScreenSize } from '@/lib/utils';
import { useAuthStore } from '@/stores/AuthStore';
// import { storeToRefs } from 'pinia';
// import { useAppStore } from '@/stores/AppStore';

import { ToastController } from '@/components/cedar-ui/toast';
import { ContextMenu } from '@/components/cedar-ui/context-menu';
import { GlobalModal } from '@/components/cedar-ui/modal';

const toastPosition = ref<ToastPostion>();

// const { toggleDarkMode, initDarkMode, initAmbientMode, initPlaybackHeatmap, initIsPlaylist, setAmbientMode, setPlaybackHeatmap, setIsPlaylist } = useAppStore();
// const { lightMode, ambientMode, playbackHeatmap, contextMenuItems, contextMenuStyle, contextMenuItemStyle, isPlaylist } = storeToRefs(useAppStore());

async function loadUser() {
    const authStore = useAuthStore();
    await authStore.fetchUser();
}

onMounted(async () => {
    // initDarkMode();

    toastPosition.value = getScreenSize() === 'default' ? 'top-center' : 'bottom-left';
    loadUser();

    window.addEventListener('focus', loadUser);
});

onUnmounted(() => {
    window.removeEventListener('focus', loadUser);
});

// watch(ambientMode, setAmbientMode, { immediate: false });
// watch(lightMode, toggleDarkMode, { immediate: false });
// watch(playbackHeatmap, setPlaybackHeatmap, { immediate: false });
// watch(isPlaylist, setIsPlaylist, { immediate: false });
</script>

<template>
    <ToastController v-if="toastPosition" :position="toastPosition" />
    <RouterView />
    <GlobalModal />
    <!-- <ContextMenu
        ref="contextMenu"
        :items="contextMenuItems"
        :style="contextMenuStyle"
        :itemStyle="contextMenuItemStyle ?? 'hover:bg-purple-600 hover:text-white'"
        scrollContainer="body"
    /> -->
</template>
