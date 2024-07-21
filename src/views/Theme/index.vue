<template>
    <div class="pt-24 p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <ThemeSide />
    </div>
</template>

<script setup>
import ThemeSide from '@/components/Theme/ThemeSide.vue'
import {  ref } from 'vue';


const selectedItem = ref(null)
</script>