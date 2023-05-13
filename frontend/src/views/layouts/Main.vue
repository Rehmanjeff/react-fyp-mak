<template>
    <div class="flex flex-row items-start min-h-screen">
        <div class="w-1/6"></div>
        <div class="w-4/6 flex flex-row">
            <div class="sidebar w-1/4">
                <slot name="leftbar"></slot>
            </div>
            <div class="main-bar w-3/4">
                <div class="sticky bg-white w-full top-0 left-0">
                    <div class="flex flex-row pt-4">
                        <div class="w-4/6">
                            <h1 class="font-semibold text-xl mb-5 px-3 mt-1">{{ $route.meta.displayName }}</h1>
                        </div>
                        <div class="pl-4 w-2/6">
                            <Search />
                        </div>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div id="main_content" class="h-full w-full flex-1" :class="symetricLayout.includes($route.name) ? 'w-6/6' : 'w-4/6'">
                        <slot />
                    </div>
                    <div class="pl-4 w-2/6" v-if="symetricLayout.includes($route.name)">
                        <slot name="rightbar"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-1/6"></div>
    </div>
</template>

<script setup>
import Search from '@/views/components/Search.vue'
import { ref } from 'vue'
// pages that have symmetric layouts (right and left bars with same width and main content on the center)
const symetricLayout = [
    'Home',
    'Profile',
    'Follower',
    'Following'
]

</script>
