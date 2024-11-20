import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Create from "./pages/Create.vue";

const routes = [
    {
        path: "/administration",
        name: "Administration Home",
        component: Home
    },
    {
        path: "/administration/new",
        name: "Administration Create New",
        component: Create
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { routes };

export default router;
