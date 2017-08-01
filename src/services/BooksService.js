import Vue from 'vue';

const getBooks = () => Vue.http.get('')
.then(res => Promise.resolve(res.body));

export { getbooks };
