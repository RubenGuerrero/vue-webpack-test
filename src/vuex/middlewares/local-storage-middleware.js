import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../mutation-types';

const localStorageMiddleware = {
  onMutation(mutation, { todos }) {
    const isTodoMutation = mutation.type === ADD_TODO
      || mutation.type === REMOVE_TODO
      || mutation.type === TOGGLE_TODO;

    if (isTodoMutation) {
      localStorage.setItem('test-todos', JSON.stringify(todos));
    }
  },
};

export default localStorageMiddleware;
