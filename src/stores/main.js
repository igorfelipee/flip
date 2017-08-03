import Vue from 'vue';
import Vuex from 'vuex';
import states from './states.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
Vue.use(Vuex);

const stores = new Vuex.Store({
  state: states,
  actions,
  mutations,
  getters
});

export default stores;
