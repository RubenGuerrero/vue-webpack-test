import {
  CHANGE_REQUEST,
  CHANGE_OK,
  INCREMENT,
  DECREMENT,
} from './counter-mutation-types';

export const increment = ({ dispatch }, num) => {
  dispatch(CHANGE_REQUEST);
  setTimeout(() => {
    dispatch(INCREMENT, num);
    dispatch(CHANGE_OK);
  }, 1000);
};

export const decrement = ({ dispatch }, num) => {
  dispatch(CHANGE_REQUEST);
  setTimeout(() => {
    dispatch(DECREMENT, num);
    dispatch(CHANGE_OK);
  }, 20);
};
