import { observable , action } from 'mobx-miniprogram'

export const store = observable({
  userInfo:{},
  owner_id: null,
  signupData: {},
  getUserInfo_mobx: action(function(object) {
    this.userInfo = object;
  }),
  getClientHeight: action(function(height) {
    this.clientHeight = height;
  }),
  getOwner_id: action(function(id) {
    this.owner_id = id;
    console.log('触发'+this.owner_id);
  }),
  getSignupData: action(function(obj) {
    this.signupData = obj;
    
  })
})