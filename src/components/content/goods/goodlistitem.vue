<template>
  <div id="goodlistitem">

      <div v-for="(item,index) in goods" :key="index">
          <img :src="item" alt="" class="img">
      </div>
      
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        goods:["https://s17.mogucdn.com/mlcdn/c45406/180920_1jh1lj62l85j29akiijhaaaidgefe_796x1194.jpg_640x854.v1cAC.40.webp","https://s2.mogucdn.com/mlcdn/c45406/180922_61611jf30ak2la355lldi2le5kb8i_640x960.jpg_640x854.v1cAC.40.webp","https://s11.mogucdn.com/mlcdn/c45406/180402_12egdk329dj7k3301ch140c223kdg_640x960.jpg_640x854.v1cAC.40.webp","https://s17.mogucdn.com/mlcdn/55cf19/171116_419jj3he8cibljf2h20k34a53g7g0_640x960.jpg_640x854.v1cAC.40.webp"]
     };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>
#goodlistitem div img{
    width: 100%;
}

</style>
