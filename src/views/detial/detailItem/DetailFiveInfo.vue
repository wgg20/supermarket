<template>
  <div class='detail-five-info' v-if="Object.keys(comments).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="info-top">
      <img :src="comments.user.avatar" alt=""> 
      <span class="user-name">{{comments.user.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{comments.content}}</p>
      <div class="date-style">
        <span class="date">{{showDate}}</span>
        <span class="style">{{comments.style}}</span>
      </div>
      <div class="show-images">
        <img :src="item" v-for="(item,index) in comments.images" :key="index">
      </div>
    </div>

  </div>
</template>

<script>

import { formatDate} from '../../../common/utils'

export default {
  name:'DetailFiveInfo',
  props: {
    comments:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  computed:{
    showDate(){
      let date = new Date(this.comments.created * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  components: {},
  data () {
    return {}
  },
}
</script> 

<style scoped>
.detail-five-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
  position: relative;
  z-index: 18;
}

.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-title {
  float: left;
  font-size: 13px;
}

.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.arrow-right {
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    width: 2.4vw;
    height: 2.4vw;
    background-color: transparent;
    transform: rotate(
135deg
);
    display: inline-block;
    margin-left: 0.1rem;
}

.info-top {
  padding: 10px 0 5px;
}

.info-top img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-top span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.info-detail .date-style {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.date-style .date {
  margin-right: 8px;
}

.show-images {
  margin-top: 10px;
}

.show-images img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>