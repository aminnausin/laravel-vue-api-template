<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '../../components/inertia/PlaceholderPattern.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Resumes',
        href: '/resumes',
    },
];
</script>

<template>
    <Head title="Resumes" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <PlaceholderPattern />
                <div
                    class="4xl:grid-cols-4 4xl:gap-x-8 4xl:gap-y-10 grid grid-cols-2 gap-x-4 gap-y-6 pt-4 pb-8 sm:grid-cols-3 md:gap-x-6 md:gap-y-8 lg:grid-cols-3 2xl:grid-cols-4"
                >
                    <div class="flex flex-col rounded-lg" style="aspect-ratio: 210 / 296">
                        <button
                            class="flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 text-gray-500 hover:opacity-80"
                            type="button"
                            data-headlessui-state=""
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5">
                                <path d="M15 7H9V1a1 1 0 00-2 0v6H1a1 1 0 000 2h6v6a1 1 0 102 0V9h6a1 1 0 100-2z"></path>
                            </svg>
                            <span class="mt-2 text-base font-bold">New resume</span>
                        </button>
                    </div>
                    <div class="resumeid-053527d6-e4d0-4f2d-a026-93b5f3e18c9a relative select-none">
                        <div class="relative cursor-pointer overflow-hidden rounded-md border border-solid border-white select-none" style="height: 396px">
                            <div class="" style="width: 306px; height: 408px">
                                <div class="pointer-events-none origin-top-left" style="transform: scale(0.375)">
                                    <div class="pointer-events-auto inline-flex">
                                        <div id="resumePages" class="pointer-events-none">
                                            <div
                                                class="notranslate resumePage"
                                                style="
                                                    position: relative;
                                                    overflow: hidden;
                                                    background-color: rgb(255, 255, 255);
                                                    background-repeat: no-repeat;
                                                    background-size: cover;
                                                    background-position: center center;
                                                    display: flex;
                                                    flex-direction: column;
                                                    line-height: 16px;
                                                    font-size: 9.5pt;
                                                    font-family:
                                                        Nunito, 'Noto Sans', 'Noto Sans SC', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Arabic', 'Noto Sans Devanagari',
                                                        'Noto Sans Hebrew', 'Noto Sans Tamil', 'Noto Sans Telugu', 'Noto Sans Thai', 'Noto Sans Gujarati', 'Noto Sans Kannada',
                                                        'Noto Sans Malayalam', 'Noto Sans Bengali', 'Noto Sans Gurmukhi', 'Noto Sans Khmer', 'Noto Sans Lao', 'Noto Sans Myanmar',
                                                        'Noto Sans Oriya', 'Noto Sans Sinhala', 'Noto Sans Ethiopic', 'Noto Sans Georgian', 'Noto Sans Armenian',
                                                        'Noto Sans Display', 'Noto Sans Math', 'Noto Sans Symbols', sans-serif;
                                                    font-stretch: normal;
                                                    text-rendering: geometricprecision;
                                                    font-variant-ligatures: none;
                                                    border-radius: 4px;
                                                    margin-bottom: 32px;
                                                    width: 215.9mm;
                                                    min-width: 215.9mm;
                                                    height: 279.4mm;
                                                    min-height: 279.4mm;
                                                "
                                            >
                                                <div style="display: flex; flex-direction: column; flex-grow: 1; width: 100%">
                                                    <div
                                                        style="
                                                            display: flex;
                                                            flex-grow: 1;
                                                            width: 100%;
                                                            background-color: transparent;
                                                            border-width: 0mm;
                                                            border-style: solid;
                                                            border-color: transparent;
                                                        "
                                                    >
                                                        <div
                                                            style="
                                                                display: flex;
                                                                flex-direction: column;
                                                                flex-grow: 1;
                                                                padding: 15.4708mm 14mm 13.0896mm;
                                                                background-color: rgb(255, 255, 255);
                                                                color: rgb(0, 0, 0);
                                                            "
                                                        >
                                                            <div>
                                                                <div
                                                                    id="resumeHeaderId"
                                                                    style="
                                                                        width: 100%;
                                                                        background-color: rgb(255, 255, 255);
                                                                        padding-bottom: 0.81328em;
                                                                        line-height: 16px;
                                                                        font-size: 9.5pt;
                                                                        white-space: pre-wrap;
                                                                        border: none;
                                                                        backface-visibility: hidden;
                                                                    "
                                                                >
                                                                    <div style="width: 100%; display: flex; flex-direction: column; align-items: center">
                                                                        <div
                                                                            style="width: 0px; max-width: 0px; height: 0px; max-height: 0px; padding-top: 0px; padding-bottom: 0px"
                                                                        >
                                                                            <div class="imageContainer" style="width: 130px"></div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    color: rgb(67, 35, 113);
                                                                                    display: flex;
                                                                                    flex-direction: column;
                                                                                    align-items: center;
                                                                                    text-align: center;
                                                                                    padding-bottom: 0.54em;
                                                                                    margin-bottom: 0.3em;
                                                                                "
                                                                            >
                                                                                <span
                                                                                    class="js-fullName"
                                                                                    style="
                                                                                        font-weight: normal;
                                                                                        font-size: 24pt;
                                                                                        letter-spacing: inherit;
                                                                                        font-family: inherit;
                                                                                        line-height: 36px;
                                                                                        overflow-wrap: anywhere;
                                                                                    "
                                                                                    >Amin Nausin</span
                                                                                >
                                                                            </div>
                                                                            <div style="width: 100%; display: flex; justify-content: center; align-items: center">
                                                                                <div style="width: 100%">
                                                                                    <div
                                                                                        style="
                                                                                            width: 100%;
                                                                                            display: flex;
                                                                                            flex-wrap: wrap;
                                                                                            justify-content: center;
                                                                                            text-align: center;
                                                                                        "
                                                                                    >
                                                                                        <a
                                                                                            href="mailto:aminnausin@gmail.com"
                                                                                            rel="noopener noreferrer"
                                                                                            target="_blank"
                                                                                            style="
                                                                                                overflow-wrap: break-word;
                                                                                                text-decoration: none;
                                                                                                color: rgb(0, 0, 0);
                                                                                                min-width: 0px;
                                                                                                display: flex;
                                                                                                align-items: center;
                                                                                                padding-bottom: 0.89em;
                                                                                                margin-left: 60.5px;
                                                                                                margin-right: 0px;
                                                                                                background-color: transparent;
                                                                                            "
                                                                                            ><div
                                                                                                style="
                                                                                                    margin-right: 0.585em;
                                                                                                    display: flex;
                                                                                                    justify-content: center;
                                                                                                    align-items: center;
                                                                                                "
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 24 24"
                                                                                                    fill="#000000"
                                                                                                    style="width: 1em; height: 1em; fill: rgb(0, 0, 0)"
                                                                                                >
                                                                                                    <title>Email</title>
                                                                                                    <path
                                                                                                        d="M19.68 20c1.414 0 2.56-1.194 2.56-2.667V10.5l-9.765 4.072a1.005 1.005 0 01-.475.095c-.232 0-.392-.034-.472-.099L1.76 10.5v6.833C1.76 18.806 2.906 20 4.32 20h15.36z"
                                                                                                    ></path>
                                                                                                    <path
                                                                                                        d="M12 11.9l10.24-4.267v-.966C22.24 5.194 21.094 4 19.68 4H4.32C2.906 4 1.76 5.194 1.76 6.667v.966L12 11.9z"
                                                                                                    ></path>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <span
                                                                                                style="
                                                                                                    display: flex;
                                                                                                    align-items: center;
                                                                                                    text-align: center;
                                                                                                    overflow-wrap: anywhere;
                                                                                                "
                                                                                                >aminnausin@gmail.com<span style="font-size: 1px"> </span></span></a
                                                                                        ><span
                                                                                            class="spacer"
                                                                                            style="
                                                                                                width: 1em;
                                                                                                display: block;
                                                                                                margin-left: 0px;
                                                                                                margin-right: 0px;
                                                                                                visibility: visible;
                                                                                            "
                                                                                            ><span
                                                                                                style="
                                                                                                    color: rgb(0, 0, 0);
                                                                                                    display: flex;
                                                                                                    justify-content: center;
                                                                                                    align-items: center;
                                                                                                    height: 16px;
                                                                                                    padding-top: 1px;
                                                                                                "
                                                                                            ></span></span
                                                                                        ><a
                                                                                            href="tel:(647) 893-7225"
                                                                                            rel="noopener noreferrer"
                                                                                            target="_blank"
                                                                                            style="
                                                                                                overflow-wrap: break-word;
                                                                                                text-decoration: none;
                                                                                                color: rgb(0, 0, 0);
                                                                                                min-width: 0px;
                                                                                                display: flex;
                                                                                                align-items: center;
                                                                                                padding-bottom: 0.89em;
                                                                                                margin-left: 0px;
                                                                                                margin-right: 0px;
                                                                                                background-color: transparent;
                                                                                            "
                                                                                            ><div
                                                                                                style="
                                                                                                    margin-right: 0.585em;
                                                                                                    display: flex;
                                                                                                    justify-content: center;
                                                                                                    align-items: center;
                                                                                                "
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 24 24"
                                                                                                    fill="#000000"
                                                                                                    style="width: 1em; height: 1em; fill: rgb(0, 0, 0)"
                                                                                                >
                                                                                                    <title>Phone</title>
                                                                                                    <path
                                                                                                        d="M22.964 17.632l-.999 4.33a1.336 1.336 0 01-1.31 1.04c-10.834 0-19.65-8.816-19.65-19.66 0-.629.428-1.167 1.04-1.307l4.33-.998a1.352 1.352 0 011.54.778L9.912 6.48c.233.55.076 1.188-.386 1.565L7.214 9.942a15.021 15.021 0 006.854 6.852l1.892-2.312a1.337 1.337 0 011.567-.385l4.66 1.997c.596.258.923.91.777 1.538z"
                                                                                                    ></path>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <span
                                                                                                style="
                                                                                                    display: flex;
                                                                                                    align-items: center;
                                                                                                    text-align: center;
                                                                                                    overflow-wrap: anywhere;
                                                                                                "
                                                                                                >(647) 893-7225<span style="font-size: 1px"> </span></span></a
                                                                                        ><span
                                                                                            class="spacer"
                                                                                            style="
                                                                                                width: 1em;
                                                                                                display: block;
                                                                                                margin-left: 0px;
                                                                                                margin-right: 0px;
                                                                                                visibility: visible;
                                                                                            "
                                                                                            ><span
                                                                                                style="
                                                                                                    color: rgb(0, 0, 0);
                                                                                                    display: flex;
                                                                                                    justify-content: center;
                                                                                                    align-items: center;
                                                                                                    height: 16px;
                                                                                                    padding-top: 1px;
                                                                                                "
                                                                                            ></span></span
                                                                                        ><a
                                                                                            href="https://github.com/aminnausin"
                                                                                            rel="noopener noreferrer"
                                                                                            target="_blank"
                                                                                            style="
                                                                                                overflow-wrap: break-word;
                                                                                                text-decoration: none;
                                                                                                color: rgb(0, 0, 0);
                                                                                                min-width: 0px;
                                                                                                display: flex;
                                                                                                align-items: center;
                                                                                                padding-bottom: 0.89em;
                                                                                                margin-left: 0px;
                                                                                                margin-right: 0px;
                                                                                                background-color: transparent;
                                                                                            "
                                                                                            ><div
                                                                                                style="
                                                                                                    margin-right: 0.585em;
                                                                                                    display: flex;
                                                                                                    justify-content: center;
                                                                                                    align-items: center;
                                                                                                "
                                                                                            >
                                                                                                <svg
                                                                                                    role="img"
                                                                                                    viewBox="0 0 24 24"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    fill="#000000"
                                                                                                    style="width: 1em; height: 1em; fill: rgb(0, 0, 0)"
                                                                                                >
                                                                                                    <title>GitHub</title>
                                                                                                    <path
                                                                                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                                                                                    ></path>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <span
                                                                                                style="
                                                                                                    display: flex;
                                                                                                    align-items: center;
                                                                                                    text-align: center;
                                                                                                    overflow-wrap: anywhere;
                                                                                                "
                                                                                                >github.com/aminnausin<span style="font-size: 1px"> </span></span></a
                                                                                        ><span
                                                                                            class="spacer"
                                                                                            style="
                                                                                                width: 1em;
                                                                                                display: block;
                                                                                                margin-left: 0px;
                                                                                                margin-right: 0px;
                                                                                                visibility: visible;
                                                                                            "
                                                                                            ><span
                                                                                                style="
                                                                                                    color: rgb(0, 0, 0);
                                                                                                    display: flex;
                                                                                                    justify-content: center;
                                                                                                    align-items: center;
                                                                                                    height: 16px;
                                                                                                    padding-top: 1px;
                                                                                                "
                                                                                            ></span></span
                                                                                        ><span
                                                                                            style="
                                                                                                overflow-wrap: break-word;
                                                                                                text-decoration: none;
                                                                                                color: rgb(0, 0, 0);
                                                                                                min-width: 0px;
                                                                                                display: flex;
                                                                                                align-items: center;
                                                                                                padding-bottom: 0.89em;
                                                                                                margin-left: 0px;
                                                                                                margin-right: 0px;
                                                                                                background-color: transparent;
                                                                                            "
                                                                                            ><div
                                                                                                style="
                                                                                                    margin-right: 0.585em;
                                                                                                    display: flex;
                                                                                                    justify-content: center;
                                                                                                    align-items: center;
                                                                                                "
                                                                                            >
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 24 24"
                                                                                                    fill="#000000"
                                                                                                    style="width: 1em; height: 1em; fill: rgb(0, 0, 0)"
                                                                                                >
                                                                                                    <path
                                                                                                        d="M4.714 3.375C4.714 2.615 4.108 2 3.357 2 2.607 2 2 2.614 2 3.375v19.25C2 23.385 2.606 24 3.357 24c.75 0 1.357-.614 1.357-1.375v-5.5h15.268c.564 0 1.018-.46 1.018-1.031 0-.224-.072-.439-.204-.619L16.93 10.25l3.867-5.225c.132-.18.204-.395.204-.619 0-.571-.454-1.031-1.018-1.031H4.714z"
                                                                                                    ></path>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <span
                                                                                                style="
                                                                                                    display: flex;
                                                                                                    align-items: center;
                                                                                                    text-align: center;
                                                                                                    overflow-wrap: anywhere;
                                                                                                "
                                                                                                >Canadian Citizen<span style="font-size: 1px"> </span></span></span
                                                                                        ><span
                                                                                            class="spacer"
                                                                                            style="
                                                                                                width: 60.5px;
                                                                                                display: block;
                                                                                                margin-left: 0px;
                                                                                                margin-right: 0px;
                                                                                                visibility: hidden;
                                                                                            "
                                                                                            ><span
                                                                                                style="
                                                                                                    color: rgb(0, 0, 0);
                                                                                                    display: flex;
                                                                                                    justify-content: center;
                                                                                                    align-items: center;
                                                                                                    height: 16px;
                                                                                                    padding-top: 1px;
                                                                                                "
                                                                                            ></span
                                                                                        ></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="Spacer" style="height: 0px"></div>
                                                            <div id="educationHeading" style="width: 100%">
                                                                <div
                                                                    style="
                                                                        display: flex;
                                                                        align-items: center;
                                                                        font-weight: bold;
                                                                        text-transform: uppercase;
                                                                        letter-spacing: 0.5px;
                                                                        font-size: 10.5pt;
                                                                        line-height: 18px;
                                                                        color: rgb(67, 35, 113);
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            width: 100%;
                                                                            display: flex;
                                                                            align-items: center;
                                                                            border-bottom: 2px solid rgb(67, 35, 113);
                                                                            margin-bottom: 0.6032em;
                                                                        "
                                                                    >
                                                                        <div style="margin-left: 0px; margin-bottom: 0.15em"></div>
                                                                        Education
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="iMlzZDvUt9t2uRMKQLUSS" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                >
                                                                                    <p>
                                                                                        <span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Toronto </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Metropolitan </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >University </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >(Formerly </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Ryerson </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >University)</span
                                                                                        >
                                                                                    </p>
                                                                                    <span class="subTitle" style="font-weight: normal; font-style: normal"
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Bachelor </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">of </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Science </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">in </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Computer </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Science </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Co-op</span
                                                                                        ></span
                                                                                    >
                                                                                </div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                        >Expected&nbsp;Dec&nbsp;2025</span
                                                                                    ></span
                                                                                >
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        ><strong style="font-weight: bold">Cumulative GPA</strong>: 4.05/4.33, Dean's List 2020,
                                                                                        2021, 2023</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="iMlzZDvUt9t2uRMKQLUSS-0" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        ><strong style="font-weight: bold">Relevant Coursework:</strong> Algorithms, Data
                                                                                        Structures, Database Systems II, Data Mining, Web Applications, Data Science</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="educationBottomSpace" style="width: 100%"><div style="height: 17px"></div></div>
                                                            <div id="workHeading" style="width: 100%">
                                                                <div
                                                                    style="
                                                                        display: flex;
                                                                        align-items: center;
                                                                        font-weight: bold;
                                                                        text-transform: uppercase;
                                                                        letter-spacing: 0.5px;
                                                                        font-size: 10.5pt;
                                                                        line-height: 18px;
                                                                        color: rgb(67, 35, 113);
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            width: 100%;
                                                                            display: flex;
                                                                            align-items: center;
                                                                            border-bottom: 2px solid rgb(67, 35, 113);
                                                                            margin-bottom: 0.6032em;
                                                                        "
                                                                    >
                                                                        <div style="margin-left: 0px; margin-bottom: 0.15em"></div>
                                                                        Work Experience
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="LzkL_-8fbWEiTW99n9b0h" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <a
                                                                                    href="https://www.aishaliving.ca/"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    style="
                                                                                        display: inline-block;
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                    ><p>
                                                                                        <span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Full-Stack </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Software </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Developer </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Intern</span
                                                                                        >
                                                                                    </p>
                                                                                    <span class="subTitle" style="font-weight: normal; font-style: normal"
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Aisha </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Living </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >(Startup)<span
                                                                                                style="vertical-align: baseline; padding-left: 0.4em; padding-right: 0.2em"
                                                                                                ><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 36 36"
                                                                                                    style="
                                                                                                        display: inline-block;
                                                                                                        vertical-align: middle;
                                                                                                        fill: rgb(0, 0, 0);
                                                                                                        width: 0.7em;
                                                                                                        height: 0.7em;
                                                                                                        padding-bottom: 0.05em;
                                                                                                    "
                                                                                                >
                                                                                                    <path
                                                                                                        d="M27 33H5a2 2 0 01-2-2V9a2 2 0 012-2h10v2H5v22h22V21h2v10a2 2 0 01-2 2z"
                                                                                                    ></path>
                                                                                                    <path
                                                                                                        d="M18 3a1 1 0 000 2h11.59L15.74 18.85a1 1 0 101.41 1.41L31 6.41V18a1 1 0 002 0V3z"
                                                                                                    ></path>
                                                                                                    <path fill="none" d="M0 0h36v36H0z"></path></svg></span></span></span
                                                                                ></a>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                        >Aug&nbsp;2024 – Dec&nbsp;2024</span
                                                                                    ><span style="white-space: pre; padding-left: 0.2em; padding-right: 0.2em"> | </span
                                                                                    ><span style="text-align: right">Toronto, ON</span></span
                                                                                >
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Launched a property management platform using Django, React (TypeScript), and Tailwind CSS,
                                                                                        leading development goals,&nbsp;managing 2 junior developers, and coordinating design
                                                                                        implementation across 3 teams</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="LzkL_-8fbWEiTW99n9b0h-0" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Refactored legacy Django code by normalizing MySQL schemas and optimising REST APIs,
                                                                                        cutting redundant endpoints by 60% and codebase size by 40%</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="LzkL_-8fbWEiTW99n9b0h-1" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column; padding-bottom: 11px">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Built a CMS and admin dashboard with Tailwind and Shadcn for the marketing team, enabling
                                                                                        campaign customisation and streamlining workflows for 20+ properties and 50+ users</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="kTGQ6zdDl-OzFd5bnV9g0" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                >
                                                                                    <p>
                                                                                        <span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Web </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Applications </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Developer </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Intern</span
                                                                                        >
                                                                                    </p>
                                                                                    <span class="subTitle" style="font-weight: normal; font-style: normal"
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Environment </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">and </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Climate </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Change </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Canada</span
                                                                                        ></span
                                                                                    >
                                                                                </div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                        >Sep&nbsp;2022 – Sep&nbsp;2023</span
                                                                                    ><span style="white-space: pre; padding-left: 0.2em; padding-right: 0.2em"> | </span
                                                                                    ><span style="text-align: right">Toronto, ON</span></span
                                                                                >
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Developed new services for CLIMS using PHP, Python, SQL, and jQuery, improving system
                                                                                        functionality and data integration</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="kTGQ6zdDl-OzFd5bnV9g0-0" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Migrated legacy analysis tools by designing UI and backend logic with PHP/MSSQL stored
                                                                                        procedures, reducing unmaintained code and streamlining lab workflows</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="kTGQ6zdDl-OzFd5bnV9g0-1" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Collaborated with lab staff to improve UX and accessibility by gathering user feedback,
                                                                                        designing UI with Bootstrap, and implementing Excel-style keyboard navigation in
                                                                                        jQuery—tripling lab workflow efficiency</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="kTGQ6zdDl-OzFd5bnV9g0-2" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        padding-left: 1em;
                                                                                        min-width: 280px;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Automated digitisation of paper records with Python, reducing manual input and improving
                                                                                        data accuracy</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="workBottomSpace" style="width: 100%"><div style="height: 17px"></div></div>
                                                            <div id="projectHeading" style="width: 100%">
                                                                <div
                                                                    style="
                                                                        display: flex;
                                                                        align-items: center;
                                                                        font-weight: bold;
                                                                        text-transform: uppercase;
                                                                        letter-spacing: 0.5px;
                                                                        font-size: 10.5pt;
                                                                        line-height: 18px;
                                                                        color: rgb(67, 35, 113);
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            width: 100%;
                                                                            display: flex;
                                                                            align-items: center;
                                                                            border-bottom: 2px solid rgb(67, 35, 113);
                                                                            margin-bottom: 0.6032em;
                                                                        "
                                                                    >
                                                                        <div style="margin-left: 0px; margin-bottom: 0.15em"></div>
                                                                        Projects
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="8QaY57hCLAdQxZUVfYKl3" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <a
                                                                                    href="https://github.com/aminnausin/mediaServer"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    style="
                                                                                        display: inline-block;
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                    ><p>
                                                                                        <span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Web </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Media </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Server<span style="vertical-align: baseline; padding-left: 0.4em; padding-right: 0.2em"
                                                                                                ><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 36 36"
                                                                                                    style="
                                                                                                        display: inline-block;
                                                                                                        vertical-align: middle;
                                                                                                        fill: rgb(0, 0, 0);
                                                                                                        width: 0.7em;
                                                                                                        height: 0.7em;
                                                                                                        padding-bottom: 0.05em;
                                                                                                    "
                                                                                                >
                                                                                                    <path
                                                                                                        d="M27 33H5a2 2 0 01-2-2V9a2 2 0 012-2h10v2H5v22h22V21h2v10a2 2 0 01-2 2z"
                                                                                                    ></path>
                                                                                                    <path
                                                                                                        d="M18 3a1 1 0 000 2h11.59L15.74 18.85a1 1 0 101.41 1.41L31 6.41V18a1 1 0 002 0V3z"
                                                                                                    ></path>
                                                                                                    <path fill="none" d="M0 0h36v36H0z"></path></svg></span
                                                                                        ></span>
                                                                                    </p>
                                                                                    <span class="subTitle" style="font-weight: normal; font-style: normal"
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Laravel, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Vue.js, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >TypeScript, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">PHP, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >PostgreSQL, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Tailwind, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Chart.js, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Websockets, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Docker, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Nginx, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Linux</span
                                                                                        ></span
                                                                                    ></a
                                                                                >
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Built a self-hosted media streaming and file management service with Laravel and Vue.js,
                                                                                        released for Linux and Docker</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="8QaY57hCLAdQxZUVfYKl3-0" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Developed a custom Vue video player with standardised keyboard controls and
                                                                                        content-specific styling (audio, video, podcasts), enhancing user experience</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="8QaY57hCLAdQxZUVfYKl3-1" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Implemented a real-time server task and data management
                                                                                        dashboard&nbsp;using&nbsp;WebSockets, Chart.js, and Laravel Pulse, providing a server
                                                                                        control panel and insights into content statistics and content indexing progress</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="8QaY57hCLAdQxZUVfYKl3-2" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column; padding-bottom: 11px">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Automated Docker builds and releases with a GitHub Actions CI/CD pipeline, ensuring
                                                                                        consistent deployment and delivery</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="bXWb-GSiaZqK9wPSqiToS" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <a
                                                                                    href="https://github.com/eldossjogy/TMU-MarketPlace"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    style="
                                                                                        display: inline-block;
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                    ><p>
                                                                                        <span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >TMU </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Student </span
                                                                                        ><span class="title" style="font-weight: bold; display: inline-block; white-space: pre-wrap"
                                                                                            >Marketplace<span
                                                                                                style="vertical-align: baseline; padding-left: 0.4em; padding-right: 0.2em"
                                                                                                ><svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    viewBox="0 0 36 36"
                                                                                                    style="
                                                                                                        display: inline-block;
                                                                                                        vertical-align: middle;
                                                                                                        fill: rgb(0, 0, 0);
                                                                                                        width: 0.7em;
                                                                                                        height: 0.7em;
                                                                                                        padding-bottom: 0.05em;
                                                                                                    "
                                                                                                >
                                                                                                    <path
                                                                                                        d="M27 33H5a2 2 0 01-2-2V9a2 2 0 012-2h10v2H5v22h22V21h2v10a2 2 0 01-2 2z"
                                                                                                    ></path>
                                                                                                    <path
                                                                                                        d="M18 3a1 1 0 000 2h11.59L15.74 18.85a1 1 0 101.41 1.41L31 6.41V18a1 1 0 002 0V3z"
                                                                                                    ></path>
                                                                                                    <path fill="none" d="M0 0h36v36H0z"></path></svg></span
                                                                                        ></span>
                                                                                    </p>
                                                                                    <span class="subTitle" style="font-weight: normal; font-style: normal"
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">React, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Express </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">JS, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >JavaScript, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Supabase, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >PostgreSQL, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Tailwind, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block">Figma, </span
                                                                                        ><span class="subTitle" style="white-space: pre-wrap; display: inline-block"
                                                                                            >Github</span
                                                                                        ></span
                                                                                    ></a
                                                                                >
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Led a 4-person team to build an e-commerce platform using React, Express.js, and Supabase,
                                                                                        transforming Figma designs into accessible, user-friendly features for campus
                                                                                        transactions</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="bXWb-GSiaZqK9wPSqiToS-0" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Developed a location-based search engine with Leaflet and ArcGIS to boost ad targeting
                                                                                        precision and user discoverability</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="bXWb-GSiaZqK9wPSqiToS-1" style="width: 100%">
                                                                <div style="width: 100%; word-break: break-word">
                                                                    <div style="width: 100%; display: flex; line-height: 16px; flex-direction: column">
                                                                        <div style="display: flex; justify-content: space-between">
                                                                            <div style="width: 100%">
                                                                                <div
                                                                                    style="
                                                                                        width: 100%;
                                                                                        font-size: 9.5pt;
                                                                                        line-height: 16px;
                                                                                        padding-bottom: 0px;
                                                                                        color: rgb(0, 0, 0);
                                                                                    "
                                                                                ></div>
                                                                            </div>
                                                                            <div style="display: flex; justify-content: flex-end; align-items: flex-start">
                                                                                <span
                                                                                    style="
                                                                                        display: flex;
                                                                                        flex-flow: wrap;
                                                                                        justify-content: flex-end;
                                                                                        line-height: 16px;
                                                                                        font-size: 9.5pt;
                                                                                    "
                                                                                    ><span
                                                                                        color="#000000"
                                                                                        style="color: rgb(0, 0, 0); font-variant-ligatures: normal; text-align: end"
                                                                                    ></span
                                                                                ></span>
                                                                            </div>
                                                                        </div>
                                                                        <div style="width: 100%">
                                                                            <div
                                                                                style="
                                                                                    width: 100%;
                                                                                    white-space: pre-wrap;
                                                                                    line-height: 16px;
                                                                                    word-break: break-word;
                                                                                    font-size: 9.5pt;
                                                                                "
                                                                            >
                                                                                <li style="display: flex; white-space: pre-wrap">
                                                                                    <div
                                                                                        style="
                                                                                            padding-left: 1.5px;
                                                                                            width: 0.9em;
                                                                                            min-width: 0.9em;
                                                                                            display: flex;
                                                                                            align-items: center;
                                                                                            height: 16px;
                                                                                        "
                                                                                    >
                                                                                        <svg
                                                                                            viewBox="0 0 20 20"
                                                                                            version="1.1"
                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                            width="4px"
                                                                                            height="4px"
                                                                                        >
                                                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                                <circle
                                                                                                    fill="#000000"
                                                                                                    fill-opacity="1"
                                                                                                    fill-rule="nonzero"
                                                                                                    cx="10"
                                                                                                    cy="10"
                                                                                                    r="10"
                                                                                                ></circle>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <span style="display: inline-block"
                                                                                        ><span
                                                                                            style="
                                                                                                font-size: 1px;
                                                                                                color: white;
                                                                                                width: 0px;
                                                                                                max-width: 0px;
                                                                                                min-width: 0px;
                                                                                                height: 0px;
                                                                                                max-height: 0px;
                                                                                                min-height: 0px;
                                                                                                display: inline-block;
                                                                                            "
                                                                                            >•</span
                                                                                        >Engineered a real-time chat and notification system with web sockets, driving engagement
                                                                                        and seamless in-app communication</span
                                                                                    >
                                                                                </li>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="projectBottomSpace" style="width: 100%"><div style="height: 17px"></div></div>
                                                            <div id="skillHeading" style="width: 100%">
                                                                <div
                                                                    style="
                                                                        display: flex;
                                                                        align-items: center;
                                                                        font-weight: bold;
                                                                        text-transform: uppercase;
                                                                        letter-spacing: 0.5px;
                                                                        font-size: 10.5pt;
                                                                        line-height: 18px;
                                                                        color: rgb(67, 35, 113);
                                                                    "
                                                                >
                                                                    <div
                                                                        style="
                                                                            width: 100%;
                                                                            display: flex;
                                                                            align-items: center;
                                                                            border-bottom: 2px solid rgb(67, 35, 113);
                                                                            margin-bottom: 0.6032em;
                                                                        "
                                                                    >
                                                                        <div style="margin-left: 0px; margin-bottom: 0.15em"></div>
                                                                        Skills
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="skill" style="width: 100%">
                                                                <div style="white-space: pre-wrap">
                                                                    <div style="width: 100%">
                                                                        <div>
                                                                            <span
                                                                                style="
                                                                                    overflow-wrap: break-word;
                                                                                    color: inherit;
                                                                                    font-weight: bold;
                                                                                    font-size: 9.5pt;
                                                                                    line-height: 16px;
                                                                                "
                                                                                >Languages:</span
                                                                            ><span style="white-space: normal; font-size: 9.5pt; overflow-wrap: break-word; font-weight: normal"
                                                                                >&nbsp;TypeScript, Python, JavaScript, PHP, SQL, C#, Go, Java, HTML, CSS, JSON, XML</span
                                                                            >
                                                                        </div>
                                                                        <div style="margin-top: 0.5em">
                                                                            <span
                                                                                style="
                                                                                    overflow-wrap: break-word;
                                                                                    color: inherit;
                                                                                    font-weight: bold;
                                                                                    font-size: 9.5pt;
                                                                                    line-height: 16px;
                                                                                "
                                                                                >Frameworks:</span
                                                                            ><span style="white-space: normal; font-size: 9.5pt; overflow-wrap: break-word; font-weight: normal"
                                                                                >&nbsp;React, Laravel, Vue.js, Django REST Framework, ExpressJS, PostgreSQL, MSSQL, Oracle,
                                                                                Tailwind, Shadcn</span
                                                                            >
                                                                        </div>
                                                                        <div style="margin-top: 0.5em">
                                                                            <span
                                                                                style="
                                                                                    overflow-wrap: break-word;
                                                                                    color: inherit;
                                                                                    font-weight: bold;
                                                                                    font-size: 9.5pt;
                                                                                    line-height: 16px;
                                                                                "
                                                                                >Tools:</span
                                                                            ><span style="white-space: normal; font-size: 9.5pt; overflow-wrap: break-word; font-weight: normal"
                                                                                >&nbsp;Git, Docker, Node.js, npm, Nginx, Linux, Supabase, Oracle Cloud VM, Vercel, JIRA,
                                                                                Postman</span
                                                                            >
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="skillBottomSpace" style="width: 100%"><div style="height: 17px"></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="mt-[6px] grid w-full max-w-full grid-cols-[minmax(0,1fr)_min-content] gap-1 pl-0.5">
                                <div class="w-full">
                                    <p class="line-clamp-2 w-full leading-tight font-bold">Resume No. 1</p>
                                    <p class="mt-0.5 text-xs leading-none text-gray-500">edited 1 month ago • Letter</p>
                                </div>
                                <div class="mt-1">
                                    <button
                                        type="button"
                                        class="flex h-7 w-7 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-md border border-solid border-gray-300 font-bold hover:bg-gray-300 hover:opacity-80 focus-visible:outline-blue-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 text-gray-500">
                                            <path d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 10a2 2 0 100 4 2 2 0 000-4zm0-7a2 2 0 100 4 2 2 0 000-4z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
