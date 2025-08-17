import type { RouteMeta } from '@/global';
import { toTitleCase } from '@/lib/utils';
import { logout } from '@/service/authAPI';
import { useAuthStore } from '@/stores/AuthStore';
import { toast } from '@aminnausin/cedar-ui';
import nProgress from 'nprogress';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'root',
            component: () => import('@/pages/Root.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/Login.vue'),
            meta: { guestOnly: true },
        },
        {
            path: '/recovery',
            name: 'recovery',
            component: () => import('@/pages/Recovery.vue'),
            meta: { guestOnly: true },
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/pages/Register.vue'),
            meta: { guestOnly: true },
        },
        {
            path: '/reset-password/:token',
            name: 'reset-password',
            component: () => import('@/pages/ResetPassword.vue'),
            meta: { guestOnly: true },
        },
        {
            path: '/logout',
            name: 'logout',
            beforeEnter: async (to, from, next) => {
                const authStore = useAuthStore();
                const meta = from.meta as { title?: string; protected?: boolean };

                let nextPath = from.fullPath;
                let nextTitle = meta?.title ?? toTitleCase(`${from.name?.toString()}`);
                try {
                    if (authStore.userData) {
                        await logout(); // call API only if session is thought to be valid
                    }
                } catch (error: any) {
                    if (error?.response?.status !== 419 && error?.response?.status !== 401) {
                        toast.error(`Unable to logout.`);
                        console.error(error);
                    }
                }
                authStore.clearAuthState();

                if (meta?.protected || from.name === 'logout') {
                    nextPath = '/';
                    nextTitle = 'Home';
                }

                document.title = nextTitle;
                next(nextPath);
            },
            component: {
                render: () => 'div',
            },
        },

        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/pages/Dashboard.vue'),
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const meta = to.meta as RouteMeta;

    nProgress.start();

    // // If going to a route that isnt included in the list, set the page title to the route title
    // if (to?.name && ['logout', 'root', 'home'].indexOf(to.name.toString()) === -1) {
    //     document.title = meta.title ?? toTitleCase(`${to.name?.toString()}`); // Update Page Title
    // }
    // // Block logged in users if the route is guest-only
    // if (to.meta.guestOnly) {
    //     return redirectGuest(to, from, next);
    // }

    // const isProtected = to.matched.some((r) => r.meta?.protected);

    // // Proceed to next route if unprotected
    // if (!isProtected) {
    return next();
    // }

    // // If the route is protected, check auth
    // return redirectAfterLogin(to, next, meta);
});

router.afterEach((to) => {
    nProgress.done(true);

    if (typeof window.plausible === 'function') {
        window.plausible('pageview', { u: to.fullPath });
    }

    // Scroll to top on every spa page load
    if (to?.name === 'home') return;

    const root = document.getElementById('root');
    root?.scrollIntoView();
});

export default router;
