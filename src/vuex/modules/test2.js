import * as types from '../mutation-types';

const state = {
  text: 'lololo',
};

const mutations = {

  [types.CHANGE_TEXT](_state, newText) {
    _state.text = newText.newValue; // eslint-disable-line no-param-reassign
  },

};

export default {
  state,
  mutations,
};
