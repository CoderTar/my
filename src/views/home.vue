<template>
  <div id="home">
    <nvabar class="home-nav" topcolor="green">
      <div slot="center">购物街</div>
    </nvabar>
    <!-- 轮播图 -->
    <homeswiper :banners="banners"></homeswiper>
    <!-- 推荐 -->
    <homeview :recommends="recommends"></homeview>
  </div>
</template>

<script>
import nvabar from "components/common/nvabar.vue";
import homeswiper from "./childComps/homeswiper.vue";
import homeview from "./childComps/homeview.vue";



// 导入网络请求
import { gethomeMultidata } from "network/home";

export default {
  name: "home",
  components: {
    nvabar,
    homeswiper,
    homeview,
  },
  //   保存请求过来的数据
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  //   开始周期函数
  created() {
    gethomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  /* background-color: rosybrown; */
  color: rgb(107, 140, 230);
}
</style>
