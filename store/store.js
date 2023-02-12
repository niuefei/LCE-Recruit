import { observable , action } from 'mobx-miniprogram'

export const store = observable({
  userInfo:{},
  clientHeight:666,
  getUserInfo_mobx: action(function(object) {
    this.userInfo = object;
    console.log(this.userInfo);
  }),
  getClientHeight: action(function(height) {
    this.clientHeight = height;
  })
})