import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/exper/three",
      name: "jspsych_three",
      component: () => import("@/views/exper/three/three.vue"),
      alias: "/"
    }
  ]
});

export default router
