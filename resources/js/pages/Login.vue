<script setup lang="ts">
import { LoginForm } from '@/components/cedar-ui/auth';

import AuthLayout from '@/layouts/AuthLayout.vue';
// import AuthLayout from '@/layouts/inertia/AuthLayout.vue';
</script>

<template>
    <AuthLayout :heading="'Enter your email and password below to log in'">
        <LoginForm />
    </AuthLayout>
</template>
