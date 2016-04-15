import * as types from './mutation-types';

export const increment = ({ dispatch }, x) => {
  dispatch(types.INCREMENT, x);
};

export const changeText = ({ dispatch }, newText) => {
  dispatch(types.CHANGE_TEXT, newText);
};
