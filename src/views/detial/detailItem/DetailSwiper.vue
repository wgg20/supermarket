<template>
    <swiper class="detail-swiper">
      <swiper-item class="swiper-item" v-for="(item,index) in swiperImages" :key="index">
        <a href="">
          <img :src="item" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>

import {Swiper,SwiperItem} from "../../../components/common/swiper/index"


export default {
  name:'DetailSwiper',
  props: {
    swiperImages:Array
  },
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {}
  },
}
</script> 

<style scoped>
.detail-swiper{
  width: 100%;
}
.swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>