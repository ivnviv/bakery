import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/menu', component: Menu},
    ]
})
