<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img src="../../../assets/img/tabbar/home.svg" alt="" slot="icon-item">
        <img src="../../../assets/img/tabbar/home_active.svg" alt="" slot="icon-item-active">
        <div slot="text-item">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img src="../../../assets/img/tabbar/category.svg" alt="" slot="icon-item">
        <img src="../../../assets/img/tabbar/category_active.svg" alt="" slot="icon-item-active">
        <div slot="text-item">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="red">
        <img src="../../../assets/img/tabbar/shopcart.svg" alt="" slot="icon-item">
        <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="" slot="icon-item-active">
        <div slot="text-item">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img src="../../../assets/img/tabbar/profile.svg" alt="" slot="icon-item">
        <img src="../../../assets/img/tabbar/profile_active.svg" alt="" slot="icon-item-active">
        <div slot="text-item">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>

import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem"

export default {
  name:"MainTabBar",
  components: {
    TabBar,
    TabBarItem
    }
}
</script>
<style scoped>

</style>