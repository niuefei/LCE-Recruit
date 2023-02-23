// pages/signup-write/signup-write.js

// 引入store
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
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
          signupData : {...this.data.signupData,name:value}
        })
        break;
      case "studentNumber":
        this.setData({
          signupData : {...this.data.signupData,studentNumber:value}
        })
        break;
      case "college":
          this.setData({
            signupData : {...this.data.signupData,college:value}
        })
          break;
      case "major":
          this.setData({
            signupData : {...this.data.signupData,major:value}
        })
          break;
      case "phoneNumber":
          this.setData({
            signupData : {...this.data.signupData,phoneNumber:value}
        })
          break;
      case "introduction":
          this.setData({
            signupData : {...this.data.signupData,introduction:value}
        })
          break;
      default:
        break;
    }
  },
  remind_name() {
    console.log("remind_name");
  },
  get() {
    wx.request({
      url: 'http://127.0.0.1:4523/m1/2179045-0-default/recruit/registerInfo/list',
      data: {
        limit: 2,
        curpage:1,
      },
      success(res) {
        console.log(res);
      }
    })
  },
  submit(e) {
    let isAllCompleted = true;
    let valueObj = e.detail.value;
    
    for(const key in valueObj) {
      if(!valueObj[key]) {
        isAllCompleted = false;
        wx.showToast({
          title: '有信息未填写',
          duration: 1500,
          icon:'error',
          mask: true,
        })
        break;
      }
      
    }
    // 判断是否全部填写了
    if(isAllCompleted) {
      console.log('调用中');
      // 调用接口
      wx.request({
        url: 'http://127.0.0.1:4523/m1/2179045-0-default/recruit/registerInfo/add',
        data: {
          resgisterInfo: {
            college: "计算机学院",
            major: "软件工程",
            stuNum: "3121005180",
            owner_id: "a62efef915d448039508480f4a417b31",
            grade: "大二",
            sex: "男",
            name: "牛奕飞",
            id: "0",
            introduction: "hello"
          }
        },
        method: "POST",
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.log("失败"+err.errMsg);          
        }
      })
      this.getSignupData(this.data.signupData);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获得store数据
    this.storeBindings = createStoreBindings(this , {
      store,
      fields: ['user_id'],
      actions: ['getSignupData']
    })
    

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