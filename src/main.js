import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/variables.css'
import './assets/styles/base.css'
import './assets/styles/layout.css'

import './assets/styles/components/header.css'
import './assets/styles/components/hero.css'
import './assets/styles/components/footer.css'
import './assets/styles/components/services.css'

createApp(App)
    .use(router)
    .mount('#app')