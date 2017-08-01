import Vue from 'vue';
Vue.use(VueResource);
function getBooks () {
    return this.$http.get('./data/books.json')
    .then(res => res.json)
};

export { getbooks };
