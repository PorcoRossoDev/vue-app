<template lang="">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 mt-10">
        <div class="overflow-x-auto" v-if="users && users.length > 0">
            <table class="table">
                <!-- head -->
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" class="checkbox" />
                    </label>
                    </th>
                    <th>ID</th>
                    <th>Họ và tên</th>
                    <th>Email</th>
                    <th>Roles</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr v-for="user in users" :key="user.id">
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </th>
                    <td>{{ user.id }}</td>
                    <td>
                    <div class="flex items-center gap-3">
                        <div class="avatar">
                        <div class="mask mask-squircle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div class="font-bold">{{ user.name }}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        {{ user.email }}
                    </td>
                    <td>{{ user.permissions }}</td>
                    <th>
                        <router-link :to="{ name: 'users.show', params: { id: user.id } }">
                            Chi tiết
                        </router-link>
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from "vue";
import getUsers from "../store/users";
const { users, fetchUsers } = getUsers();

onMounted(() => {
  fetchUsers();
});
</script>