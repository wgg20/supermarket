import { ADD_NUM, ADD_NEW } from './mutations-type';
export default {
  addCart(context, payload) {
    //1.查找之前数组中是否又该商品
    let oldProduct = context.state.cartList.find(
      (item) => item.iid === payload.iid
    );
    //2.判断oldProduct
    if (oldProduct) {
      // oldProduct.count += 1;
      context.commit(ADD_NUM, oldProduct);
    } else {
      payload.count = 1;
      // context.cartList.push(payload);
      context.commit(ADD_NEW, payload);
    }
  },
};
