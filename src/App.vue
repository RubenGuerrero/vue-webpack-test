
<template>
  <div>
    <router-view keep-alive></router-view>
  </div>
</template>

<script>

import store from './vuex/store';
export default {
  store,
};

</script>

<style lang="less">

  @import '~normalize.css';

  @font: Helvetica, sans-serif;

  body {
    font-family: @font;
  }

</style>
