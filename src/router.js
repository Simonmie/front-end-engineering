import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
  ],
});

export default router;
