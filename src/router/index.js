import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import( '@/views/Login')
    },
    {
        path: "/Home",
        name: "Home",
        component: () => import('../views/Home'),
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '数据概览'
                },
                component: () => import( "@/views/DashBoard")
            },
            {
                path: "/DateSearch",
                name: "DateSearch",
                component: () => import("@/views/DateSearch")
            },
            {
                path: '/PeopleSearch',
                name: 'PeopleSearch',
                component: () => import('@/views/PeopleSearch')
            },
            {
                path: '/ActorSearch',
                name: 'ActorSearch',
                component: () => import('@/views/ActorSearch')
            },
            {
                path: '/Statistics',
                name: 'Statistics',
                component: () => import('@/views/Statistics')
            },
            {
                path: '/Graph',
                name: 'Graph',
                component: () => import('@/views/Graph')
            }
        ]
    },

];
const router = new VueRouter(
    {
        routes,
        // mode: 'history'
        mode: 'hash',
    }
);
export default router;
