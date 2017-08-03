import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import stores from './stores/main.js';
import routes from './routes/routes.js';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store: stores,
  router,
  render: h => h(App)
})
