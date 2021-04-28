<template>
  <div id='detail'>
    <detail-item class="nav-bar" @chooseClick="indexClick" ref="navbar"></detail-item>
    <scroll class="scroll-content" ref="scroll" :pull-up-load="true" @scroll="scroll" :probeType="2">
      <detail-swiper :swiperImages="topImages"></detail-swiper>
      <detail-first-info :goods="goods"></detail-first-info>
      <detail-second-info :shops="shops"></detail-second-info>
      <detail-third-info :details="details" @imgLoad="thirdImgLoad"></detail-third-info>
      <detail-forth-info :items="items" ref="params"></detail-forth-info>
      <detail-five-info :comments="comments" ref="comments"></detail-five-info>
      <goods-list :goodsInfo="recodeItem" ref="goods"></goods-list>
      <ul class="ul">
    </ul>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top v-show="isShow" @click.native="isTop"></back-top>
    
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
import DetailBottomBar from './detailItem/DetailBottomBar'

import {getDetails,Goods,Shops,Items,getRecommend} from '../../network/details'
import {itemImgLoad} from '../../common/mixin'
// import {debounce} from '../../common/utils'

import Scroll from "../../components/common/scroll/Scroll"
import BackTop from "../../components/content/backTop/BackTop"
import { debounce } from '../../common/utils'



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
    DetailBottomBar,
    BackTop
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
      recodeItem:[],
      themeTopY:[],
      getThemeTopY:null,
      currentIndex:0,
      isShow:false
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
      }})

       getRecommend().then((res)=>{
        this.recodeItem=res.data.list
        console.log(res)
    }),
     this.getThemeTopY = debounce(()=>{
          
          this.$nextTick(()=>{
          this.themeTopY = []
          this.themeTopY.push(0)
          this.themeTopY.push(this.$refs.params.$el.offsetTop -44 )
          this.themeTopY.push(this.$refs.comments.$el.offsetTop -44 )
          this.themeTopY.push(this.$refs.goods.$el.offsetTop -44)
          })
      },100)
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
      this.getThemeTopY()
    },
    indexClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index],100)
    },
    scroll(position){
      const positionY = -position.y;
      // console.log(positionY);
      let length = this.themeTopY.length;
      for (let i = 0; i < length; i++) {
        // if(this.currentIndex!==i && ((i<length-1 && positonY>=this.scrollTop[i] && positonY<this.scrollTop[i+1])
        // || (i==length-1 &&positonY>=this.scrollTop[i]))){
        //   this.currentIndex=i
        //   this.$refs.nav.currentColor=this.currentIndex
        // }
        // this.currentIndex!==i作用是防止多次打印 在存储数组里面的索引号不等于设置属性值currentIndex的情况下
        if(this.currentIndex !==i && ((i<length-1 && positionY>=this.themeTopY[i] && positionY<this.themeTopY[i+1]) || (i===length-1 && positionY >= this.themeTopY[i]))){
          this.currentIndex=i
          this.$refs.navbar.currentIndex=this.currentIndex
        }
      }
      this.scrollTopImg=positionY>10000
      this.isShow = -(position.y)  > 1000;
    },
    isTop(){
      this.$refs.scroll.scrollTo(0,0,200)
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
  height: calc(100% - 90px );
}
</style>