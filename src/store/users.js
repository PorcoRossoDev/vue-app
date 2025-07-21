import axios from "axios";
import API from "../plugin/api";
import { onMounted, ref } from "vue";

export default function getUsers() {
    const users = ref(null)

    const fetchUsers = ( async() => {
        try {
            const res = await API.get('users')
            users.value = res.data
            console.log(users.value);
        } catch (error) {
            console.log('Lỗi')
        }
    })

    const usersShow = async (payload) => {
        try {
            const res = await API.get('users', payload)
            return res
        } catch (error) {
            console.log('Lỗi')
        }
    }

    return {
        users,
        fetchUsers,
        usersShow
    };
}