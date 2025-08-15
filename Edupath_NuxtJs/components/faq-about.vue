<template>
    <div class="lg:col-span-6 md:col-span-7">
        <div class="relative">
            <div class="relative md:shrink-0 lg:mx-0 mx-5">
                <img class="object-cover md:w-96 w-84 h-[500px] rounded-lg shadow-md dark:shadow-gyay-700" :src="about1" alt=""/>
            </div>

            <div class="absolute bottom-10 lg:end-6 end-0">
                <div class="relative z-1 top-10 xl:text-start lg:text-end text-end">
                    <NuxtLink :to="[]" @click="toggle" class="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-violet-600 text-white">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </NuxtLink>
                </div>

                <div class="relative md:shrink-0">
                    <img class="object-cover size-48 rounded-lg shadow-md dark:shadow-gyay-700" :src="about2" alt=""/>
                </div>
            </div>

            <div class="absolute md:top-16 top-12 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 z-2 mover">
                <h5 class="font-semibold mb-3">Our Instrunctors</h5>
                <ul class="list-none relative">
                    <li v-for="(item, index) in teamImg" :key="index" class="inline-block relative -ms-4 first:ms-0 mx-[2px]"><NuxtLink :to="[]"><img :src="item" class="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></NuxtLink></li>
                    <li class="inline-block relative -ms-4"><NuxtLink :to="[]" class="size-9 table-cell tracking-wide align-middle text-base text-center rounded-full bg-violet-600 text-white hover:z-1 hover:scale-105 transition-all duration-500"><i class="mdi mdi-plus"></i></NuxtLink></li>
                </ul>
            </div>
        </div>
        <div class="fixed w-full h-[100vh] top-0 left-0 z-999" :class="open ? '' : 'hidden'" style="background-color: rgba(0, 0, 0, 0.5);">
            <div class="w-full h-full flex justify-center items-center">
                <div class="relative px-4 w-full max-w-2xl h-auto">
                    <button class="absolute right-0 -top-4 bg-slate-600 p-[2px] rounded z-[9999]" @click="toggle"><i data-feather="x" class="text-slate-300"></i></button>
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-0">
                            <iframe width="750" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    import about1 from '@/assets/images/course/4.jpg'
    import about2 from '@/assets/images/course/2.jpg'
    import team1 from '@/assets/images/team/1.jpg'
    import team2 from '@/assets/images/team/2.jpg'
    import team3 from '@/assets/images/team/3.jpg'
    import team4 from '@/assets/images/team/4.jpg'
    import team5 from '@/assets/images/team/5.jpg'

    const teamImg = ref([team1,team2,team3,team4,team5])

    const open = ref(false)

    const toggle = () =>{
        open.value = !open.value
    }
</script>
