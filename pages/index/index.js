// index.js
// 获取应用实例
const app = getApp()

// 引入store
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({
  data: {
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onReady() {
    this.storeBindings = createStoreBindings(this , {
      store,
      fields: ['owner_id'],
      actions: ['getUserInfo_mobx','getOwner_id']
    })
  },
  onLoad() {
    var that = this;
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          console.log('code='+res.code)
          // 将code保存到data中
          that.setData({
            owner_id: res.code
          })
          // 保存在store中
          that.getOwner_id(res.code);
          wx.request({
            url: 'http://www.kevin.tj.cn:8082/recruit/login/wechatLogin?code='+res.code,
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    /*
      获得手机信息    
    */
   wx.getSystemInfo({
    success: (res) => {
      this.setData({
        clientHeight: res.windowHeight
      })
    }
  })
  },// onload

  a() {
    console.log('触发a');
      this.getUserInfo_mobx(this.data.userInfo);
  },
  getUserProfile(e) {
    // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.a();
      }
    })
    
    
  },
  getUserInfo(e) {
    // 不推荐使用 getUserInfo 获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getCode(e){
  
}
})
