import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import create from './components/addProduct.vue'
import update from './components/updateProduct.vue'

createApp(App).use(store).use(router).mount('#app')
