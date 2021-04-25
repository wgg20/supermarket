<template>
  <div id='detail'>
    <detail-item></detail-item>
    <detail-swiper :swiperImages="topImages"></detail-swiper>
  </div>
</template>

<script>

import DetailItem from './detailItem/DetailItem'
import DetailSwiper from './detailItem/DetailSwiper'

import {getDetails} from '../../network/details'

export default {
  name:'Detail',
  props: {},
  components: {
    DetailItem,
    DetailSwiper
  },
  data () {
    return {
      iid:null,
      topImages:[]
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetails(this.iid).then(res =>{
      console.log(res);
      this.topImages=res.result.itemInfo.topImages
    })
  },
  methods: {
  },
}
</script> 

<style scoped>

</style>