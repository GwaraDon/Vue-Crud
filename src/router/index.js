import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/list",
      name: "list",
      component: () => import("../components/students/List.vue"),
    },
    {
      path: "/view/:id",
      name: "view",
     component: () => import("../components/students/View.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../components/students/Edit.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../components/students/Create.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound
    }  
  ],
});

export default router;
