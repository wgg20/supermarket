<template>
<div id="home">
  <!-- <nav-bar class="home-nav"><template v-slot:center>购物车</template></nav-bar> -->
 <nav-bar class="home-nav"><div class="center" slot="center">购物车</div></nav-bar>
 <home-swiper :banners="banners" class="home-swiper"></home-swiper>
 <rec-view :recommends="recommends"></rec-view>
 <feature></feature>
 <tab-control :title="['流行','新款','精选']" class="tab-control" @conClick="conChange"></tab-control>
 <goods-list :goodsInfo="showGoods"></goods-list>
 <ul>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
      <li>wosjji</li>
    </ul>
</div>
</template>
<script>

import NavBar from "../../components/common/navbar/NavBar"
import TabControl from "../../components/content/tabcontrol/TabControl"
import GoodsList from "../../components/content/goods/GoodsList"

import HomeSwiper from "./childComps/HomeSwiper"
import RecView from "./childComps/RecView"
import Feature from "./childComps/Feature"


import {getHomeData, getHomeMultidata} from "../../network/home"



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
      currentType:'pop'
    }},
  
  components:{
    NavBar,
    HomeSwiper,
    RecView,
    Feature,
    TabControl,
    GoodsList
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
        break
    }
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
        console.log(res);
      //将当前页数请求到得数据push进定义得数组中保存
        this.goods[type].list.push(...res.data.list);
        //数据推送完后，自定义得页数加一
        this.goods[type].page+=1
      })
    }
  },
}
</script>
<style scoped>
#home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
  }
  .center{
    line-height:44px;
  }
  .home-nav{
    position: fixed;
    left:0;
    right: 0;
    top:0;
    /* z-index: 9; */
  }
  
  .tab-control{
    position: sticky;
    top:44px
  }
</style>