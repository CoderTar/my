<template>
  <div class="recommends">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommendsitem"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeview",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.recommends{
    display: flex;
    text-align: center;
    width: auto;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
    
}
.recommendsitem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
.recommendsitem{
    flex: 1;
}
</style>
