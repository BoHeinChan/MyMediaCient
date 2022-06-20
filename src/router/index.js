import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "home_page",
        component: () =>
            import ("@/views/HomePage.vue"),
    },
    {
        path: "/post_detail",
        name: "post_detail",
        component: () =>
            import ("@/views/PostDetail.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("@/views/LoginPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;