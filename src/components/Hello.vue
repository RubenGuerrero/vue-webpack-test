<template>
  <div class="hello">
    <h1>{{ msg }} - {{ count }}</h1>
    <h2>{{ testText }}</h2>
    <input type="text" v-model="testText">
    <button @click="increment(1)">increment</button>
  </div>
</template>

<script>

import { increment, changeText } from '../vuex/actions';

export default {

  name: 'Hello',

  vuex: {
    actions: {
      increment,
      changeText,
    },
    getters: {
      count: state => state.test.count,
      test: state => state.test2.text,
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
          lalala: 'Hello world',
          newValue,
        });
      },
    },
  },

};
</script>

<style lang="less" scoped>

  h1 {
    color: #42b983;
  }

</style>
