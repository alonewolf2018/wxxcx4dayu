// pages/ysaf/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
      wx.request({
          method: 'POST',
          header: {
              'responseDataType': 'JSON',
              'content-type': 'application/x-www-form-urlencoded'
              //'Cookie':'JSESSIONID=DB9E4454DC6655A542D72AC3011C4B56; Path=/dayu'
          },
          url: 'http://127.0.0.1:8080/dayu/ysaf.dsk.login.cptLogin.login4pc.biz.ext',
          data: {
              username: '60007',
              password: '000000'
          },
          success: function (res) {
              console.log(res.data.rtResult);
              console.log(res.data.rtResult.rtMsg);
              console.log(res.header);
              var cookies = res.header["Set-Cookie"];
              console.log(cookies);
          }
      });
  }
})