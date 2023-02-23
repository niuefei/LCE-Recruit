// pages/user/user.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    default_avatar: "../../static/images/default-avatar.svg",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.storeBindings = createStoreBindings(this , {
      store,
      fields: ['userInfo','signupData'],
    })

    // 获得报名信息
    let that = this;
    wx.request({
      url: 'http://127.0.0.1:4523/m1/2179045-0-default/recruit/registerInfo/list',
      data: {
        stuNum: 1
      },
      method: "GET",
      success(res) {
        console.log("获取成功");
        that.setData({
          signupData: res.data
        })
      },
      fail(err) {
        console.log("失败"+err.Msg);
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
    this.storeBindings.destroyStoreBindings();
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