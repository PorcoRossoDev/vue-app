import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import router from './router/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')