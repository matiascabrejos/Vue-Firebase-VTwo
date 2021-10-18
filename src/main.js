import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store/index.js'

import TheLogin from './components/TheLogin.vue'
import TheButton from './components/TheButton.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/home' }
    ],
    linkActiveClass: 'active',
  })

app.component('the-login', TheLogin)
app.component('the-button', TheButton)

app.use(router)
app.use(store)
app.mount('#app')
