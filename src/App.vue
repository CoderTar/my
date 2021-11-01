<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
// 导入组件
import home from "views/home.vue"

export default {
  name: "App",
  components: {
    home
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
