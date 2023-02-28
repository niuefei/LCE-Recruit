// components/user/MyStep/MyStep.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    steps: ['报名','面试','一轮考核','二轮考核'],
    progressWidth: [20,200,370,565],
    spotsClass: ['spot' , 'spot','active-spot','spots'],
    triangleStyle: 'none'
  },
  
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let that = this;
      setTimeout(function() {
        that.setData({
          active: that.data.active+1
        })
      },1500)

      // 斑点的颜色
      let query = this.createSelectorQuery();
      let spots = query.selectAll(".spot");
      
  }
},

  /**
   * 组件的方法列表
   */
  methods: {

  }

})
