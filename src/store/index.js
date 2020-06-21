import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './action';

import book from './modules/books';
import store from './modules/store';
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    //模块化 减少一个文件代码量过大
    book,
    store,
    user,
  },
  getters,
  actions,
})
