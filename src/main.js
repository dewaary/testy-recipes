import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routers";
import { createApp } from "vue";
import App from "./App.vue";

// Membuat instance router
const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { top: 0 };
  // },
});

// Membuat instance aplikasi Vue dan menggunakan router
const app = createApp(App);
app.use(router);

// Mount aplikasi ke elemen dengan id "app"
app.mount("#app");
