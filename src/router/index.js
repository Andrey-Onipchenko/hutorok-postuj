import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/play",
    name: "Play",
    component: () => import("../views/Play.vue")
  },
  {
    path: "/rules",
    name: "Rules",
    component: () => import("../views/Rules.vue")
  },
  {
    path: "/winners",
    name: "Winners",
    component: () => import("../views/Winners.vue")
  },
  {
    path: "/statistic",
    name: "Statistic",
    component: () => import("../views/Statistic.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
