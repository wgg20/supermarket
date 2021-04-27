import { debounce } from '../common/utils';
export const itemImgLoad = {
  data() {
    return {
      itemImgLoad: null,
    };
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    //接收来自GoodLidtItem组件的图片加载，一旦加载完，刷新scroll
    this.itemImgLoad = () => {
      refresh();
    };
    this.$bus.$on('imgLoad', this.itemImgLoad);
  },
};
