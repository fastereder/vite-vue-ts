import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import '@/assets/css/index.css'

const pinia = createPinia()
const head = createHead()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(head)

app.mount('#app')
