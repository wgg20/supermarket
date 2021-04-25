<template>
<div id="home">
  <!-- <nav-bar class="home-nav"><template v-slot:center>购物车</template></nav-bar> -->
 <nav-bar class="home-nav"><div class="center" slot="center">购物车</div></nav-bar>
 <tab-control :title="['流行','新款','精选']" 
              @conClick="conChange" 
              ref="tabControl01" 
              class="control01" 
              v-show="isFixed"></tab-control>
 <scroll class="content" ref="scroll" 
        :probe-type="3"
         @scrollPosition="contentPosition"
         :pull-up-load="true"
         @pullUp="pullMore">
    <home-swiper :banners="banners" class="home-swiper"></home-swiper>
 <rec-view :recommends="recommends"></rec-view>
 <feature></feature>
 <tab-control :title="['流行','新款','精选']" 
              @conClick="conChange" 
              ref="tabControl02" class="control"></tab-control>
 <goods-list :goodsInfo="showGoods"></goods-list>
 </scroll>
 <back-top @click.native="backTop" v-show="isBtnShow"></back-top>
</div>
</template>
<script>

import NavBar from "../../components/common/navbar/NavBar"
import TabControl from "../../components/content/tabcontrol/TabControl"
import GoodsList from "../../components/content/goods/GoodsList"
import Scroll from "../../components/common/scroll/Scroll"
import BackTop from "../../components/content/backTop/BackTop"


import HomeSwiper from "./childComps/HomeSwiper"
import RecView from "./childComps/RecView"
import Feature from "./childComps/Feature"


import {getHomeData, getHomeMultidata} from "../../network/home"
import {debounce} from "../../common/utils"




export default {
  name:"Home",
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isBtnShow:false,
      tabOffSetTop:0,
      isFixed:false,
      tabControlisShow:false
    }},
  
  components:{
    NavBar,
    HomeSwiper,
    RecView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  computed:{
    showGoods(){
     return this.goods[this.currentType].list
    }
  },
  created(){
    //请求轮播图和其下面得商品得数据
    this.getHomeMultidata();
    //一开始就请求三类商品数据
    this.getHomeData('pop');
    this.getHomeData('new');
    this.getHomeData('sell'); 


    // setTimeout(
    //   function(){
    //     console.log(this.$refs.tabControl.$el.offsetTop);
    //   },300
    // )
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,200);
    //接收来自GoodLidtItem组件的图片加载，一旦加载完，刷新scroll
     this.$bus.$on('imgLoad',() => {
       refresh()
    });
  },
  updated() {
    this.tabOffSetTop = this.$refs.tabControl02.$el.offsetTop ;
    // this.tabControlisShow = 
  },

  methods: {
  conChange(index){
    switch(index){
      case 0:
        this.currentType='pop'
        break
      case 1:
        this.currentType='new'
        break
      case 2:
        this.currentType='sell'
        break; 
    }
     this.$refs.tabControl02.currentIndex = index;
     this.$refs.tabControl01.currentIndex = index;
  },
  backTop(){
    this.$refs.scroll.scrollTo(0,0);
    // console.log("aaa");
    // console.log(this.$refs.scroll.scroll);
  },
  //获取当前scroll的位置
  contentPosition(position){
    // console.log(position);
    //将position的y值取反
    this.isBtnShow = Math.abs(position.y)  > 1000;
    this.isFixed = Math.abs(position.y)  > this.tabOffSetTop;
  },
  pullMore(){
    // console.log("上拉加载更多");
    //触及到第一页底部时，加载当前种类的页面数据
    this.getHomeData(this.currentType);
    this.$refs.scroll.refresh()
  },

    //网络请求相关代码
    getHomeMultidata(){
       getHomeMultidata().then(res => {
      // console.log(res);
      // this.result = res;
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
    //请求商品类型
    getHomeData(type){
      //将当前商品页数+1赋值给page去请求下一页得数据
      const page = this.goods[type].page + 1
      //异步回调商品类型及其页数
      getHomeData(type,page).then(res => {
        // console.log(res);
      //将当前页数请求到得数据push进定义得数组中保存
        this.goods[type].list.push(...res.data.list);
        //数据推送完后，自定义得页数加一
        this.goods[type].page+=1;
        //完成下拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
    //防抖，节流
}}
</script>
<style scoped>

   #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    /* z-index: 9; */
  }

  /* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 10;
  } */
  .content{
    height: calc(100% - 44px);
    overflow: hidden;
  }
  /* .control01{
    margin-top: 44px;
  } */

 
</style>