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
      fields: ['user_id'],
      actions: ['getUserInfo_mobx','getUser_id']
    })
  },
  onLoad() {
    var that = this;
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求，向腾讯获取code
          //用于后端向腾讯服务器获取信息
          //一次性信息不用保存
          console.log('腾讯的code='+res.code)

          //向lce服务器发送请求，获取token user_id等信息
          wx.request({
            url: 'https://www.kevin.tj.cn:8082/recruit/login/wechatLogin?code='+res.code,
            data: {
              code: res.code
            },
success(res2){
  //打印lce返回的信息
  console.log(res2.data)
  that.setData({
    //建议改成user_id owner_id意思是报名表的主人id
    //报名表有自己的id 属性名为id
    //建议保存token到本地，并在每次发送请求的时候将token放在Header的Authorization中
    user_id: res2.data.id

  })
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
