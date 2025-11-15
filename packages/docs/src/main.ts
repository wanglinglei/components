import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLib from '@vue-lib/components'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueLib)
app.mount('#app')

