import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store/index.js'
import "./tailwind.css"

import TheLogin from './components/TheLogin.vue'
import TheButton from './components/TheButton.vue'
import TheForm from './components/TheForm.vue'
import AddNote from './components/AddNote.vue'
import TheHome from './components/TheHome.vue'
import TheNavbar from './components/TheNavbar.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: TheHome },
      { path: '/add-note', component: AddNote },
      { path: '/login', component: TheLogin }
    ],
    linkActiveClass: 'active',
  })

app.component('the-login', TheLogin)
app.component('the-button', TheButton)
app.component('the-form', TheForm)
app.component('add-note', AddNote)
app.component('the-home', TheHome)
app.component('the-navbar', TheNavbar)

app.use(router)
app.use(store)
app.mount('#app')
