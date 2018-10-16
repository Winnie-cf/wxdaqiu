// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {img_src:'/img/banner.png'}
    ],
    navtab:[
      { title: '赛事规程', icon: '/img/guichen.png' },
      { title: '名单日程', icon: '/img/richen.png' },
      { title: '实时比分', icon: '/img/bifen.png' },
      { title: '视频直播', icon: '/img/zhibo.png' }
    ],
    list:[
      { img: '/img/kandian1.png', content: '2018年维克多全国羽毛球团体赛火热 开打！！', date: '2018.09.16' },
      { img: '/img/kandian2.png', content: '2018年维克多全国羽毛球团体赛火热 开打！！', date: '2018.09.16' },
      { img: '/img/kandian3.png', content: '2018年维克多全国羽毛球团体赛火热 开打！！', date:'2018.09.16'},
      ],

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})