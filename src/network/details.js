import { request } from './request';
export function getDetails(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    },
  });
}

export class Goods {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}

export class Shops {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cFans = shopInfo.cFans;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
  }
}
