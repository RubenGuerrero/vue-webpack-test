<template>
  <div class="hello">

    <h2>{{ testText }}</h2>
    <input type="text" v-model="testText">

    <hr>

    <h1>{{ msg }} - {{ counter.count }}</h1>

    <button
      @click="increment(1)"
      :disabled="counter.processing">increment</button>

    <button
      @click="decrement(1)"
      :disabled="counter.processing">decrement</button>

    <hr>

    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.actived" @change="toggleTodo(todo)">
        <strong>{{ todo.text }}</strong>
        <button @click="removeTodo(todo)">x</button>
      </li>
    </ul>

    <input type="text" @keyup.enter="tryAddTodo">

  </div>
</template>

<script>

import {
  changeText,
  addTodo,
  removeTodo,
  toggleTodo,
} from '../vuex/actions';

import {
  increment,
  decrement,
} from '../vuex/modules/counter/counter-actions';

export default {

  name: 'Hello',

  vuex: {
    actions: {
      increment,
      decrement,
      changeText,
      addTodo,
      removeTodo,
      toggleTodo,
    },
    getters: {
      counter: state => state.counter,
      test: state => state.test2.text,
      todos: state => state.todos,
    },
  },

  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    };
  },

  computed: {
    testText: {
      get() {
        return this.test;
      },
      set(newValue) {
        this.changeText({
          newValue,
        });
      },
    },
  },

  methods: {
    tryAddTodo(e) {
      const event = e;
      const text = event.target.value;

      this.addTodo(text);
      event.target.value = '';
    },
  },

};
</script>

<style lang="less" scoped>

  h1 {
    color: #42b983;
  }

</style>
