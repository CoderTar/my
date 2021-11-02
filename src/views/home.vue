<template>
  <div id="home">
    <nvabar class="home-nav" topcolor="green">
      <div slot="center">购物街</div>
    </nvabar>
    <!-- 轮播图 -->
    <homeswiper :banners="banners"></homeswiper>
    <!-- 推荐 -->
    <homeview :recommends="recommends"></homeview>
    <!-- 主题 -->
    <feature active="green"></feature>

    <tabctrl :titles="['流行', '新款', '百搭']" class="tabctrld"></tabctrl>
    <!-- 列表 -->
    <goodlist></goodlist>
  </div>
</template>

<script>
import nvabar from "components/common/nvabar.vue";
import homeswiper from "./childComps/homeswiper.vue";
import homeview from "./childComps/homeview.vue";
import feature from "./feature.vue";
import tabctrl from "components/content/tabCtrl/tabctrl.vue";
import goodlist from "components/content/goods/goodlist.vue"

// 导入网络请求
import { gethomeMultidata } from "network/home";

export default {
  name: "home",
  components: {
    nvabar,
    homeswiper,
    homeview,
    feature,
    tabctrl,
    goodlist,
  },
  //   保存请求过来的数据
  data() {
    return {
      banners: [],
      recommends: [],
      // 商品数据模型
      goods: {
        "pop": { page: 0, list: [] },
        "news": { page: 0, list: [] },
        "sell": { page: 0, list: [] },
      },
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
#home {
  padding-top: 40px;
}
.home-nav {
  /* background-color: rosybrown; */
  color: rgb(107, 140, 230);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}
.tabctrld {
  position: sticky;
  top: 44px;
}
</style>
