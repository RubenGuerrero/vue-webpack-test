import * as types from './mutation-types';

export const addTodo = ({ dispatch }, newTodoText) => {
  dispatch(types.ADD_TODO, {
    text: newTodoText,
    actived: true,
  });
};

export const removeTodo = ({ dispatch }, todo) => {
  dispatch(types.REMOVE_TODO, todo);
};

export const toggleTodo = ({ dispatch }, todo) => {
  dispatch(types.TOGGLE_TODO, todo);
};

export const changeText = ({ dispatch }, newText) => {
  dispatch(types.CHANGE_TEXT, newText);
};
