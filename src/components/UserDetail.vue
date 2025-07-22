<template>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 mt-10">
        
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import getUsers from '../store/users'
const { users, usersShow } = getUsers();

onMounted = ({
    usersShow()
})
</script>