<template>
  <div id='detail'>
    <detail-item></detail-item>
    <detail-swiper :swiperImages="topImages"></detail-swiper>
    <detail-first-info :goods="goods"></detail-first-info>
    <detail-second-info :shops="shops"></detail-second-info>
    <ul>
      <li>xinxi1</li>
      <li>xinxi2</li>
      <li>xinxi3</li>
      <li>xinxi4</li>
      <li>xinxi5</li>
      <li>xinxi6</li>
      <li>xinxi7</li>
      <li>xinxi8</li>
      <li>xinxi9</li>
      <li>xinxi10</li>
      <li>xinxi11</li>
      <li>xinxi12</li>
      <li>xinxi13</li>
      <li>xinxi14</li>
      <li>xinxi15</li>
      <li>xinxi16</li>
      <li>xinxi17</li>
      <li>xinxi18</li>
      <li>xinxi19</li>
      <li>xinxi20</li>
      <li>xinxi21</li>
      <li>xinxi22</li>
      <li>xinxi23</li>
      <li>xinxi24</li>
      <li>xinxi25</li>
      <li>xinxi26</li>
      <li>xinxi27</li>
      <li>xinxi28</li>
      <li>xinxi29</li>
      <li>xinxi30</li>
    </ul>
  </div>
</template>

<script>

import DetailItem from './detailItem/DetailItem'
import DetailSwiper from './detailItem/DetailSwiper'
import DetailFirstInfo from './detailItem/DetailFirstInfo'
import DetailSecondInfo from './detailItem/DetailSecondInfo'

import {getDetails,Goods,Shops} from '../../network/details'

export default {
  name:'Detail',
  props: {},
  components: {
    DetailItem,
    DetailSwiper,
    DetailFirstInfo,
    DetailSecondInfo
  },
  data () {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shops:{}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetails(this.iid).then(res =>{
      console.log(res);
      const data = res.result
      this.topImages=data.itemInfo.topImages;
      this.goods = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
      this.shops = new Shops(data.shopInfo)
    })
  },
  methods: {
  },
}
</script> 

<style scoped>

</style>