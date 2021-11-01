<template>
  <div class="navbar" :style="colortop">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    topcolor: String,
  },
  data() {
    return {};
  },
//   动态绑定属性,通过父组件传递props
// 通过计算属性回调
  computed: {
    colortop() {
       return{background:this.topcolor}
    },
  },
  watch: {},
  methods: {},
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.01);
}
.left,
.right {
  width: 60px;
  /* background-color: red; */
}
.center {
  flex: 1;
  /* background-color: seagreen; */
}
</style>
