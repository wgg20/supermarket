<template>
<div id="home">
  <!-- <nav-bar class="home-nav"><template v-slot:center>购物车</template></nav-bar> -->
 <nav-bar class="home-nav"> 
    <div class="center" slot="center">购物车</div> 
 </nav-bar>
 <swiper>
   <swiper-item v-for="item,index in banners" :key="index">
     <a :href="item.link">
       <img :src="item.image" alt="">
     </a>
   </swiper-item>
 </swiper>

</div>
</template>
<script>

import NavBar from "../../components/common/navbar/NavBar"
import {getHomeMultidata} from "../../network/home"
import {Swiper,SwiperItem} from "../../components/common/swiper"


export default {
  name:"Home",
  data(){
    return {
      banners:[],
      recommends:[]
    }},
  components:{
    NavBar,
    Swiper,
    SwiperItem
  },
  created(){
    getHomeMultidata().then(res => {
      // console.log(res);
      // this.result = res;
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  }
}
</script>
<style scoped>
  .home-nav{
    background-color: var(--color-tint);
  }
  .center{
    line-height:44px;
  }
</style>