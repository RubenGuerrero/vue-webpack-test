import {
  CHANGE_REQUEST,
  CHANGE_OK,
  INCREMENT,
  DECREMENT,
} from './counter-mutation-types';

export default {

  [CHANGE_REQUEST](_state) {
    const state = _state;
    state.processing = true;
  },

  [CHANGE_OK](_state) {
    const state = _state;
    state.processing = false;
  },

  [INCREMENT](_state, x) {
    const state = _state;
    state.count += x;
  },

  [DECREMENT](_state, x) {
    const state = _state;
    state.count -= x;
  },

};
