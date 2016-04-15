// import { set } from 'vue';

import * as types from './mutation-types';

export default {

  [types.CHANGE_TEXT](state, newText) {
    state.test = newText.newValue; // eslint-disable-line no-param-reassign
  },

};
