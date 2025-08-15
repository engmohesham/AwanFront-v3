<template>
    <div class="container relative">
        <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-6">
            <div v-for="(item, index) in partnerData" :key="index" class="mx-auto py-4">
                <img :src="item" class="h-6" alt=""/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { partnerData } from '@/data/data';
</script>
