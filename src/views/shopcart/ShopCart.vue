<template>
  <div id="shop-cart">
    <nav-bar class="nav-bars">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <scroll class="scr-content" :pull-up-load="true" :probeType="2" ref="scroll">
      <cart-list class="cart-list"></cart-list>
    </scroll>
    <cart-list-bottom></cart-list-bottom>
  </div>
</template>
<script>

import NavBar from '../../components/common/navbar/NavBar'
import Scroll from '../../components/common/scroll/Scroll'

import CartList from './childrensCom/CartList'
import CartListBottom from './childrensCom/CartListBottom'

import {mapGetters} from 'vuex'
export default {
  name:"ShopCart",
  components:{
    NavBar,
    Scroll,
    CartList,
    CartListBottom
  },
  computed:{
    ...mapGetters(['cartListLength'])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>
<style scoped>
#shop-cart{
  height: 100vh;
}
.nav-bars{
  /* background: #ff8198; */
  background-color: var(--color-tint);
  line-height: 44px;
  text-align: center;
  font-weight: 750;
  color:#fff;
  font-size: 16px;
}
.scr-content{
  height: calc(100% - 93px);
  overflow: hidden;
  /* height: 300px; */
}
.cart-list{
  height:100%
}
</style>