import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import test2 from './modules/test2';
import todos from './modules/todos';

import middlewares from './middlewares';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
    test2,
    todos,
  },
  strict: true,
  middlewares,
});
