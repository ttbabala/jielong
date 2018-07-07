// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flagqr: true,
    flagzf: true,
    amount: 0,
    index: 0,
    goods_num: 1
  },
  /**
   * 弹出小程序二维码层
  */
  popqrcode: function(e){
    this.setData({
      flagqr: false,
      flagzf: true
    })
  },
  /**
   * 弹出转发层
   */
  popzhuanfa: function(e){
    this.setData({
      flagzf: false,
      flagqr: true
    })
  },

  /**
   * 关闭二维码层
   */
  closepopqr: function(e){
    this.setData({
      flagqr: true,
      flagzf: true
    })
  },

  /*
  *转发
  /**
   * 
   * 生命周期函数--监听页面加载
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '团购接龙',
      path: '/page/user?id=123'
    }
  },

  //绑定购物车文本框数量
  bindMinus: function (e) {
    var num = this.data.goods_num;
    if (num > 1) {
      num--;
    }

    this.setData({ goods_num: num });
  },
  bindManual: function (e) {
    var index = parseInt(e.currentTarget.dataset.index);
    var num = e.detail.value;
    this.setData({ goods_num: num });
  },
  bindPlus: function (e) {
    var num = this.data.goods_num;

    num++;

    this.setData({ goods_num: num });
  },

  /* 跳转到首页 */
  navihome: function(e){
    wx.navigateTo({
      url: '../index/index'
    })
  },

  /* 跳转到发布接龙页面 */
  navipub: function (e) {
    wx.navigateTo({
      url: '../pub/pubnow/pubnow'
    })
  },

  onLoad: function (options) {
    wx.showShareMenu({
      // 要求小程序返回分享目标信息
      withShareTicket: true
    }); 
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