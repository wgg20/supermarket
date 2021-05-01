module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, //宽 在现在手机上，1px 实则是2px
      viewportHeight: 667,
      unitPrecision: 5, //保留小数
      viewportUnit: 'vw',
      // selectorBlackList: ['ignore', 'tab-bar'],
      minPixelValue: 1, //最小单位
      mediaQuery: false, //媒体查询
    },
  },
};
