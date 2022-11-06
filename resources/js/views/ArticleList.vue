<template>
    <div class="container content">
        <div class="heading row mt-4">
            <div class="col">
                <h1>Article List</h1>
            </div>
        </div>
        <table class="table table-hover">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">タイトル</th>
                    <th scope="col">登録日</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article in articles" :key="article.id">
                    <th scope="row">{{ article.id }}</th>
                    <td>{{ article.title }}</td>
                    <td>{{ article.created_at }}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="getPageCount > 1">
            <VuejsPaginate v-model="currentPage" :pageCount="getPageCount" :prevText="'<'" :nextText="'>'"
                :clickHandler="paginateClickCallback" :containerClass="'pagination'" :first-last-button="true"
                :first-button-text="'<<'" :last-button-text="'>>'" :pageClass="'page-item'">
            </VuejsPaginate>
        </div>
    </div>
</template>

<script>
import VueJsPaginate from "vuejs-paginate";

const FIRST_PAGE_NUMBER = 1;
const DEFAULT_PER_PAGE = "10";

export default {
    components: {
        'VuejsPaginate': VueJsPaginate
    },
    data: function () {
        return {
            articles: [],
            currentPage: FIRST_PAGE_NUMBER,
            perPage: DEFAULT_PER_PAGE,
            // QUESTION 初期値は null 0 のどちらが良いのか?
            totalCount: 0,
        };
    },
    methods: {
        getArticles() {
            axios.get(`/api/articles?page=${this.currentPage}`).then((res) => {
                const result = res.data;
                this.currentPage = result.current_page;
                this.perPage = result.per_page;
                this.totalCount = result.total;
                this.articles = res.data.data;
            });
        },
        paginateClickCallback: function (pageNum) {
            this.currentPage = pageNum;
            this.$router.push({ name: 'articles', query: { perPage: this.perPage, page: this.currentPage, } })
        },
    },
    beforeRouteUpdate(to, from, next) {
        // QUESTION: next()を実行しないとqueryの値が更新されない。これが普通？
        // [【Nuxt.js/Vue.js】<nuxt-link>や$router.pushで同じパスに遷移すると画面が更新されない](https://zenn.dev/kokota/articles/352ecf9ada3a48)
        next();
        this.getArticles(to.query.perPage, to.query.page);
    },
    computed: {
        getPageCount: function () {
            return Math.ceil(this.totalCount / this.perPage);
        }
    },
    mounted() {
        this.getArticles(FIRST_PAGE_NUMBER);
    },
};
</script>

<style>
.active {
    background-color: blue;
    color: white;
}

.inactive {
    color: #337abc;
}

.pagination {
    display: flex;
    list-style-type: none;
}

.pagination li {
    border: 1px solid #ddd;
    padding: 6px 12px;
    text-align: center;
    cursor: pointer;
}

.pagination li.disabled,
.pagination li.disabled a,
.page-item.disabled,
.page-item.disabled a {
    color: #616A71;
    opacity: .5;
    cursor: not-allowed;
}


.pagination li+li {
    border-left: none;
}
</style>
