//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hotgoods: true,
    fjgoods: false,
    likegoods: false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  //事件处理函数
  navgoods: function() {
    wx.navigateTo({
      url: '../goods/goods'
    })
  },
  //热门推荐响应事件
  seltab_hotgoods: function(){
    this.setData({
      hotgoods: true,
      fjgoods: false,
      likegoods: false
    })
  },
  //附近接龙响应事件
  seltab_fjgoods: function(){
    this.setData({
      fjgoods: true,
      hotgoods: false,
      likegoods: false
    })
  },
  //我关注的响应事件
  seltab_likegoods: function(){
    this.setData({
      likegoods: true,
      hotgoods: false,
      fjgoods: false
    })
  },
  //个人主页跳转
  navpersonal: function () {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  //onload事件
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
