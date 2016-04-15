import * as types from '../mutation-types';

const state = {
  count: 1,
};

const mutations = {

  [types.INCREMENT](_state, x) {
    _state.count = _state.count += x; // eslint-disable-line no-param-reassign
  },

};

export default {
  state,
  mutations,
};
