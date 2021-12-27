import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import store from "./store/index.js";
import "./tailwind.css";

import TheLogin from "./components/TheLogin.vue";
import TheButton from "./components/TheButton.vue";
import TheForm from "./components/TheForm.vue";
import AddNote from "./components/AddNote.vue";
import TheHome from "./components/TheHome.vue";
import TheNavbar from "./components/TheNavbar.vue";
import TheNotes from "./components/TheNotes.vue";
import TheFooter from "./components/TheFooter.vue";
import SucccessAlert from "./components/SuccessAlert.vue";
import NotFound from "./components/NotFound.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: TheHome },
    { path: "/add-note", component: AddNote },
    { path: "/login", component: TheLogin },
    { path: "/notes", component: TheNotes },
    { path: "/success", component: SucccessAlert },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

app.component("the-login", TheLogin);
app.component("the-button", TheButton);
app.component("the-form", TheForm);
app.component("add-note", AddNote);
app.component("the-home", TheHome);
app.component("the-navbar", TheNavbar);
app.component("the-notes", TheNotes);
app.component("the-footer", TheFooter);

app.use(router);
app.use(store);
app.mount("#app");
