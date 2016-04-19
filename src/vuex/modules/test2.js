import * as types from '../mutation-types';

const initialState = {
  text: 'Hello my friend',
};

const mutations = {

  [types.CHANGE_TEXT](_state, newText) {
    const state = _state;
    state.text = newText.newValue;
  },

};

export default {
  state: initialState,
  mutations,
};
