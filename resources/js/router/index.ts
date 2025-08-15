import type { RouteMeta } from '@/global';
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
