import { observable , action } from 'mobx-miniprogram'

export const store = observable({
  userInfo:{},
  user_id: null,
  signupData: {},
  getUserInfo_mobx: action(function(object) {
    this.userInfo = object;
  }),
  getClientHeight: action(function(height) {
    this.clientHeight = height;
  }),
  getUser_id: action(function(id) {
    this.user_id = id;
    console.log('触发'+this.user_id);
  }),
  getSignupData: action(function(obj) {
    this.signupData = obj;
    
  })
})