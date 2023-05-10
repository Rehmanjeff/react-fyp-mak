<template>
    <div class="flex flex-row items-start min-h-screen">
        <div class="w-1/4"></div>
        <div class="sidebar">
            <slot name="leftbar"></slot>
        </div>
        <div id="main_content" class="h-full w-full overflow-auto">
            <slot />
        </div>
        <div class="trends-bar">
            <slot name="rightbar"></slot>
        </div>
        <div class="w-1/4"></div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();

</script>
