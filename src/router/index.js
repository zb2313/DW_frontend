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
                path: '/Graph',
                name: 'Graph',
                component: () => import('@/views/Graph')
            },
            {
                path: '/Cooperation',
                name:'cooperation',
                component:()=>import('@/views/Cooperation.vue')
            },
            {
                path:'/TraceSource',
                name:'TraceSource',
                component:()=>import('@/views/TraceSource.vue')
            },
            {
                path:'/ImdbRank',
                name:'ImdbRank',
                component:()=>import('@/views/ImdbRank.vue')
            },
            {
              path: '/AsinDetails',
              name:'AsinDetails',
              component:()=>import('@/views/AsinDetails.vue')
            },
            {
                path: '/DateCompare',
                name:'DateCompare',
                component:()=>import('@/views/DateCompare.vue')
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
