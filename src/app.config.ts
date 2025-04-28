export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#4e6492',
    navigationBarBackgroundColor: '#4e6492',
    navigationBarTitleText: '天气',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息仅用于获取天气信息"
    }
  },
  requiredPrivateInfos: [
    'getLocation'
  ],
});
