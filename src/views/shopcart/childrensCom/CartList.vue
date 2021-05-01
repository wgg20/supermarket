<template>
  <div class='cart-list'>
    <cart-list-item 
    class="cart-item" 
    v-for="(item,index) in cartList" 
    :product="item" 
    :key="index"></cart-list-item>
  </div>
</template>

<script>

import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

export default {
  name:'CartList',
  props: {},
  components: {
    CartListItem
  },
  data () {
    return {}
  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script> 

<style scoped>

</style>