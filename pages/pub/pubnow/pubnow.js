// pages/pub/pubnow/pubnow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    showprice: false,
    showdate: false,
    date: '2018-10-01',
    popflag:true,
    roomname: '定位位置',
    index: 0,
    array: ['美食特产', '母婴用品', '衣装服饰', '家庭生活','运动健身']
  },
  /**
   * 选项卡
   */
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  openmap: function(e){
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.chooseLocation({
          success: function (res) {
            // // success
            that.setData({
              roomname: '银川市万达广场A座-101'
            })
          },
          fail: function () {
            // console.log(res);
          },
          complete: function () {
            // complete
          }
        })

      }
    }) 
  },
  choosephoto: function(e){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },

  setprice: function(e){
    this.setData({
      showprice: e.detail.value
    })
  },

  setdate: function(e){
    this.setData({
      showdate: e.detail.value
    })
  },

  changeDate: function(e){
    this.setData({
      date: e.detail.value
    })
  },

  setwuliu: function(e){
    if(e.detail.value == true){
      e.detail.value = false;
    }else{
      e.detail.value = true;
    }
    this.setData({
      popflag: e.detail.value
    })
  },

  /**
 * 弹出层函数
 */
  //出现
  show: function () {
    this.setData({ popflag: false })
  },
  //消失
  hide: function () {
    this.setData({ popflag: true })
  },
  /**
   * 跳转到下一步
   */
  nextstep: function () {
    this.setData({
      selected: false,
      selected1: true
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