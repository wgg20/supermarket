<template>
  <div class='detail-forth-info' v-if="Object.keys(items).length != 0">
    <table v-for="(table,index) in items.tables" :key="index" class="table-size">
      <tr v-for="(tr,inder) in table" :key="inder">
        <td v-for="(td,inded) in tr" :key="inded">{{td}}</td>
      </tr>
    </table>

    <table class="table-set">
      <tr v-for="(item,index) in items.set" :key="index">
        <td class="table-key">{{item.key}}</td>
        <td class="table-value">{{item.value}}</td>
      </tr>
    </table>

    <div class="table-img" v-if="items.images.length != 0">
      <img :src="items.images" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailForthInfo',
  props: {
    items:{
      type:Object,
      default(){
        return {}
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
.detail-forth-info {
  padding: 20px 17px;
  font-size: 12px;
  border-bottom: 5px solid #f2f5f8;
}

.detail-forth-info table {
  width: 100%;
  border-collapse: collapse;
}

.detail-forth-info table tr {
  height: 42px;
}

.detail-forth-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  margin-left: 3px;
}

.table-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.table-set {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.table-value {
  color: #eb4868;
}

.table-img img {
  width: 100%;
}
</style>