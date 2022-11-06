import Router from "vue-router";
import Home from "./views/Home.vue";
import Sample from "./views/Sample.vue";

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/after_loggined_path',
        name: 'sample',
        component: Sample
    }]
})
