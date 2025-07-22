import axios from "axios";

const ApiDum = axios.create({
    baseURL: import.meta.env.VITE_API_DUMMY_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
})

export default ApiDum