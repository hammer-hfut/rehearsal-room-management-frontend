import './assets/main.css'
import '@icon-park/vue-next/styles/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia().use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(router).use(pinia)

app.mount('#app')
