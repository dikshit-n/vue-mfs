import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Create from "./pages/Create.vue";

const routes = [
    {
        path: "/order",
        name: "Order Home",
        component: Home
    },
    {
        path: "/order/new",
        name: "Order Create New",
        component: Create
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { routes };

export default router;
