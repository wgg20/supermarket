<template>
  <div id='detail'>
    <detail-item class="nav-bar"></detail-item>
    <scroll class="scroll-content" ref="scroll" :pull-up-load="true">
      <detail-swiper :swiperImages="topImages"></detail-swiper>
      <detail-first-info :goods="goods"></detail-first-info>
      <detail-second-info :shops="shops"></detail-second-info>
      <detail-third-info :details="details" @imgLoad="thirdImgLoad"></detail-third-info>
      <detail-forth-info :items="items" ></detail-forth-info>
      <detail-five-info :comments="comments"></detail-five-info>
      <goods-list :goodsInfo="recodeItem"></goods-list>
      <ul class="ul">
    </ul>
    </scroll>
  </div>
</template>

<script>

import DetailItem from './detailItem/DetailItem'
import DetailSwiper from './detailItem/DetailSwiper'
import DetailFirstInfo from './detailItem/DetailFirstInfo'
import DetailSecondInfo from './detailItem/DetailSecondInfo'
import DetailThirdInfo from './detailItem/DetailThirdInfo'
import DetailForthInfo from './detailItem/DetailForthInfo'
import DetailFiveInfo from './detailItem/DetailFiveInfo'
import GoodsList from '../../components/content/goods/GoodsList'

import {getDetails,Goods,Shops,Items,getRecommend} from '../../network/details'
import {itemImgLoad} from '../../common/mixin'
// import {debounce} from '../../common/utils'

import Scroll from "../../components/common/scroll/Scroll"



export default {
  name:'Detail',
  props: {},
  components: {
    DetailItem,
    DetailSwiper,
    DetailFirstInfo,
    DetailSecondInfo,
    DetailThirdInfo,
    DetailForthInfo,
    DetailFiveInfo,
    Scroll,
    GoodsList,
    // itemImgLoad:null
    
  },
  data () {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shops:{},
      details:{},
      items:{},
      comments:{},
      recodeItem:[]
    }
  },
  mixins:[itemImgLoad],
  created() {
    this.iid = this.$route.params.iid
    getDetails(this.iid).then(res =>{
      console.log(res);
      const data = res.result
      this.topImages=data.itemInfo.topImages;
      this.goods = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
      this.shops = new Shops(data.shopInfo)
      this.details= data.detailInfo
      this.items=new Items(data.itemParams.info,data.itemParams.rule)

      if(data.rate.cRate !== 0){
        this.comments = data.rate.list[0]
      }

       getRecommend().then((res)=>{
        this.recodeItem=res.data.list
        console.log(res);
      })
    })
  },
  mounted() {
    //  const refresh = debounce(this.$refs.scroll.refresh,200);
    // 接收来自GoodLidtItem组件的图片加载，一旦加载完，刷新scroll
    //    this.itemImgLoad = () => {
    //    refresh()
    // }
    //  this.$bus.$on('imgLoad',this.itemImgLoad);
  },
  //因为Home组件有keepalive组件所以可以在deactivated生命周期取消事件
  //但是Detail组件没有keepalive组件所以只能在destroied生命周期取消事件
  destroyed() {
    this.$bus.$off('imgLoad',this.itemImgLoad)
  },
  methods: {
    thirdImgLoad(){
      this.$refs.scroll.refresh()
    }
  },
}
</script> 

<style scoped>
.ul{
  height: 100px;
}
#detail{
  /* 将tabbar隐藏掉 */
  position: relative;
  z-index: 100;
  background-color:#fff;
  height: 100vh;
  /* margin-bottom: -50px; */
}
.nav-bar{
  position: relative;
  background-color: #fff;
  z-index: 5;
}
.scroll-content{
  height: calc(100% - 44px);
}
</style>