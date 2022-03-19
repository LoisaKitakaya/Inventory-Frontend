import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import HomeView from "../views/HomeView.vue";
import Signup from "../views/authentication/Signup.vue";
import Login from "../views/authentication/Login.vue";
import InventoryView from "../views/InventoryView.vue";
import ItemDetailView from "../views/ItemDetailView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/inventory",
    name: "inventory",
    component: InventoryView,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/inventory/:id",
    name: "detail",
    component: ItemDetailView,
    meta: {
      requireLogin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    !store.state.isAuthenticated
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router;
