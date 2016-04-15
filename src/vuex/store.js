import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';

import test from './modules/test';
import test2 from './modules/test2';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    test,
    test2,
  },
  strict: true,
  middlewares: [createLogger()],
});
