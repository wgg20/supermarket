<template>
  <div class='cart-button' :class="{cheackd:isChecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CartListButton',
  props: {
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  components: {},
  data () {
    return {}
  },
}
</script> 

<style scoped>
  .cart-button{
    border-radius: 50%;
    background-color: #bbb;
    border: 2px solid #aaa;
  }
  .cart-button img{
    width: 15px;
    height: 15px;
  }
  .cheackd{
    background-color: red;
    border: 2px solid red;
  }
</style>