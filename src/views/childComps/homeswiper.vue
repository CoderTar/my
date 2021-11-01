<template>
  <div id="homeswiper">
    <swiper>
      <swiperitem v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiperitem>
    </swiper>
  </div>
</template>

<script>
import { Swiper, swiperitem } from "components/common/swiper/index.js";

export default {
  name: "homeswiper",

  components: {
    Swiper,
    swiperitem,
  },
  props:{
    banners:{
      // 类型为数组
      // 默认值是一个空数组
      type:Array,
      default(){
        return []
      }
    }
  }

};
</script>

<style scoped>

</style>
