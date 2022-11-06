<template>
    <div class="container content">
        <div class="heading row mt-4">
            <div class="col">
                <h1>Article List</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-right">
                <label for="display-count">表示件数</label>
                <select name="per-page" id="display-count" v-model="perPage" v-bind:checked="perPage"
                    v-on:change="changePerPage">
                    <option value="1">1</option>
                    <option value="10">10</option>
                    <option value="20">20</option>

                </select>
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
            currentPage: this.currentPage = this.$route.query.page || FIRST_PAGE_NUMBER,
            perPage: this.perPage = this.$route.query.perPage || DEFAULT_PER_PAGE,
            // QUESTION 初期値は null 0 のどちらが良いのか?
            totalCount: 0,
        };
    },
    methods: {
        changePerPage(e) {
            // QUESTION 不正な値の挿入は気にしなくて良い?
            //  [Laravel5のページング機能に表示件数の可変を実装する方法 - Qiita](https://qiita.com/qwe001/items/a82054b45acaca164d7c)
            const changedPerPage = e.target.value;
            if (["1", "10", "20"].includes(changedPerPage)) {
                this.perPage = changedPerPage;
            } else {
                this.perPage = DEFAULT_PER_PAGE;
            }
            this.currentPage = 1;
            this.$router.push({ name: 'articles', query: { perPage: this.perPage, page: this.currentPage, } })

        },
        getArticles() {
            axios.get(`/api/articles`, { params: { perPage: this.perPage, page: this.currentPage } }).then((res) => {
                const result = res.data;
                this.currentPage = result.current_page;
                this.perPage = result.per_page;
                this.totalCount = result.total;
                this.articles = result.data;
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
