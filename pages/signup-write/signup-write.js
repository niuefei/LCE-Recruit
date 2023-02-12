// pages/signup-write/signup-write.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signupData: {
      name: null, // 姓名
      studentNumber: null, // 学号
      college: null, // 学院
      major: null, // 专业
      phoneNumber: null, // 电话
      introduction: null // 简介
    },
    
  },
  /*
  页面事件  
  */
  iptChange(e) {
    var type = e.currentTarget.dataset.type;
    var value = e.detail.value;
    switch (type) {
      case "name":
        this.setData({
          name: value
        })
        break;
      case "studentNumber":
        this.setData({
          studentNumber: value
        })
        break;
      case "college":
          this.setData({
            college: value
        })
          break;
      case "major":
          this.setData({
            major: value
        })
          break;
      case "phoneNumber":
          this.setData({
            phoneNumber: value
        })
          break;
      case "introduction":
          this.setData({
            introduction: value
        })
          break;
      default:
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获得手机长度
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          clientHeight: res.windowHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})