import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pokedex from "../views/pokedex/Pokedex.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pokedex',
        name: 'Pokedex',
        component: Pokedex,
        children: [

        ]
    }
];

const router = new VueRouter({
    routes
})

export default router
