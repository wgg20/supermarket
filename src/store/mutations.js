import { ADD_NUM, ADD_NEW } from './mutations-type';
export default {
  [ADD_NUM](state, payload) {
    payload.count++;
  },
  [ADD_NEW](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  },
};
