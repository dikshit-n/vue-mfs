import { createRouter, createWebHistory } from "vue-router";
import { routes as administrationRoutes } from "administration/router";
import { routes as orderRoutes } from "order/router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("./pages/Home.vue"),
        },
        {
            path: "/profile",
            name: "Profile",
            component: () => import("./pages/Profile.vue"),
        },
        ...administrationRoutes,
        ...orderRoutes,
    ],
});

export default router;
