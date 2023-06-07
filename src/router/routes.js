import { RouterView } from "vue-router";
import { defineComponent } from "vue";

export default [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home.vue"),
    },
    {
        path: '/contactUs',
        name: 'ContactUs',
        component: () => import("../views/ContactUs.vue"),
    },
    {
        path: '/ourWork',
        name: 'OurWork',
        component: () => import("../views/OurWork.vue"),
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import("../views/Blog.vue")
    },
    {
        path: "/services",
        component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
        children: [
            {
                path: "customWebsite",
                name: "CustomWebsite",
                component: () => import("../views/CustomWebsite.vue"),
            },
            {
                path: "templatedSites",
                name: "TemplatedSites",
                component: () => import("../views/TemplatedSites.vue")
            }
        ]
    }
];