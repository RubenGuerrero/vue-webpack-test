import * as types from '../mutation-types';

export const STORAGE_KEY = 'test-todos';

const initialState = JSON.parse(localStorage.getItem('test-todos') || '[]');

const mutations = {

  [types.ADD_TODO](_state, todo) {
    const state = _state;
    state.push(todo);
  },

  [types.REMOVE_TODO](_state, todo) {
    const state = _state;
    state.$remove(todo);
  },

  [types.TOGGLE_TODO](_state, _todo) {
    const todo = _todo;
    todo.actived = !todo.actived;
  },

};

export default {
  state: initialState,
  mutations,
};
