<template lang="">
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
            <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
            </div>
            <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <button @click.prevent="logout" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useAuthStore } from '@/store/auth'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()

const logout = () => {
    const isLogout = auth.logout()
    if( isLogout ) {
        alert('Đăng xuất thành công!')
        router.push('/login')
    } else {
        alert('Đăng xuất thất bại!')
    }
}
</script>