<template>
  <div class='cart-bottom'>
    <div class="left">
      <cart-list-button 
      class="button" 
      :isChecked="isAllChecked"
      @click.native="selectAll"></cart-list-button>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：￥{{totalPrice}}</span>
    </div>
    <div class="calculate" @click="toBuy">
      去计算{{totalCount}}
    </div>
  </div>
</template>

<script>

import CartListButton from '../../../components/content/checkButton/CartListButton'
import {mapGetters} from 'vuex'

export default {
  name:'CartListBottom',
  props: {},
  components: {
    CartListButton
  },
  data () {
    return {}
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter((item) => {
        return item.checked
      }).reduce((prePrice,item) => {
        return prePrice + item.price * item.count
      },0).toFixed(2)
    },
    totalCount(){
      return this.cartList.filter((item) =>item.checked).reduce((preCount,item) =>
      {return preCount+item.count},0)
    },
    isAllChecked(){
      if (this.cartList.length === 0) return false
      return !this.cartList.find((item) => !item.checked)
    }
  },
  methods: {
    //全选中变全不选中
    selectAll(){
      if(this.isAllChecked){
        this.cartList.forEach((item) => {item.checked = false})}
      else{
        this.cartList.forEach((item) => {item.checked = true})
      }
    },
    toBuy(){
      alert('付款成功，请您稍后关注商家发货信息')
    }
  },
}
</script> 

<style scoped>
.cart-bottom{
  height: 40px;
  width: 100%;
  position: fixed;
  right: 0;
  left:0;
  bottom: 49px;
  background-color: #eee;
  display: flex;
  font-size: 14px;
}
.left{
  height: 100%;
  width: 85px;
  display: flex;
  align-items: center;
}

.button{
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.total-price{
  margin-left: 30px;
  line-height: 40px;
  flex: 1;
}
.calculate{
  background-color: red;
  width: 80px;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
/* .checked{
  background-color: red;
  border: 2px solid red;
} */
</style>