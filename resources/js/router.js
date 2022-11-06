import Router from "vue-router";
import ArticleList from "./views/ArticleList.vue";
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
        path: '/articles',
        name: 'article.index',
        component: ArticleList
    },
    {
        path: '/after_loggined_path',
        name: 'sample',
        component: Sample
    },
    ]
})
