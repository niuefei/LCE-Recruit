// 用于配置网络请求的默认路径
let app = getApp()
const baseURL = app.globalData.baseURL;

function get(url, param, callback) {
  wx.request({
     url: baseURL + url, // 基础路由 + 传过来的地址
     data: param,
     header: {
        "content-type": "application/json", // 默认值
        openid: wx.getStorageSync('wxOpenId') // 接口里加入openid，类似于token
     },
     success(res) {
       console.log('成功');
       console.log(res);
     },
     fail(err) {
       console.log('失败');
       console.log(err);
     }
  });
}

// 和get同理
function post(url, param, callback) {
  wx.request({
     url: baseURL + url,
     data: param,
     method: "POST",
     header: {
        "content-type": "application/json", // 默认值
        openid: wx.getStorageSync('wxOpenId')
     },
     success(res) {
      console.log('成功');
      console.log(res);
    },
    fail(err) {
      console.log('失败');
      console.log(err);
    }
  });
}


module.exports = {
  get
};