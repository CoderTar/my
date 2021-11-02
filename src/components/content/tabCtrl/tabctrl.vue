<template>
  <div class="tabctrl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabctrlitem"
      :class="{ active: index === currentIndex }"
      @click="tabacive(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabctrl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },    
    },
    active:String
  },
  methods: {
    tabacive(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.tabctrl {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: khaki;
  height: 40px;
  line-height: 4opx;
}
.tabctrlitem {
  flex: 1;
  padding: 5px;
}

.tabctrlitem span {
  padding: 5px;
}
.active span {
  border-bottom: 3px solid hotpink;
}
.active {
  color: hotpink;
}
</style>
