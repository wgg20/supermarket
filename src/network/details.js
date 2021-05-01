import { request } from './request';
export function getDetails(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    },
  });
}

export function getRecommend() {
  return request({
    url: '/recommend',
  });
}

export class Goods {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.newPrice = itemInfo.price;
    this.columns = columns;
    this.services = services;
    this.desc = itemInfo.desc;
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

export class Items {
  constructor(info, rule) {
    this.images = info.images ? info.images[0] : '';
    this.set = info.set;
    this.tables = rule.tables;
  }
}
