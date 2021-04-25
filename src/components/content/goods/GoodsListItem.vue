<template>
  <div class='goods-list-item'>
    <img :src="goodsItem.show.img" alt="" @load="itemImgLoad">
    <div class="content">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props: {
    goodsItem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  components: {},
  data () {
    return {}
  },
  methods: {
    itemImgLoad(){
      this.$bus.$emit('imgLoad')
    }
  },
}
</script> 

<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}

.content {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.content p {
  /* 文字溢出隐藏 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.content .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.content .collect {
  position: relative;
}

.content .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>