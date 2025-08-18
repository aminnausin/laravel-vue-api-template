<script setup lang="ts">
import { useAuthStore } from '@/stores/AuthStore';
import { storeToRefs } from 'pinia';

const { userData } = storeToRefs(useAuthStore());
</script>

<template>
    <header class="flex justify-between p-6 pt-3 sm:pt-6">
        <h1>Template</h1>
        <nav>
            <template v-if="userData">
                <p>{{ userData.name }}</p>
                <router-link to="logout"> Logout </router-link>
            </template>
            <template v-else>
                <router-link to="login"> Login </router-link>
                <router-link to="register"> Register </router-link>
            </template>
        </nav>
    </header>
</template>
