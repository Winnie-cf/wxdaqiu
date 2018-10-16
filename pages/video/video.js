// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
      img: '/img/pingpang.png',
      title: '2018威克多杯全国乒乓球团队竞赛赛校小组赛',
      group: '男单',
      battle: '张三 VS 王五',
      url: ''
    },
    {
      img: '/img/bangqiu.png',
      title: '2018威克多杯全国乒乓球团队竞赛赛校小组赛',
      group: '男单',
      battle: '张三 VS 王五',
      url: ''
    },
    {
      img: '/img/yumao.png',
      title: '2018威克多杯全国乒乓球团队竞赛赛校小组赛',
      group: '男单',
      battle: '张三 VS 王五',
      url: ''
    },
    ],
    index:1
  },

  //最新推荐
  newlist:function(){
    this.setData({
      index: 1
    })
  },

  //热门
  hotlist:function(){
    this.setData({
      index: 2
    })
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