<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"TabBar"
}
</script>
<style scoped>
.tab-bar{
    /* display: flex;

    height: 49px;

    position: fixed;
    left:0;
    right:0;
    bottom: 0;
    background-color: #eee;
    z-index: 10; */
    z-index:11;
    display: flex;
    background-color: #f6f6f6;
    /* background-color:black; */

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}
</style>