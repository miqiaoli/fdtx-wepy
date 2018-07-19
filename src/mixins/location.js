import wepy from 'wepy'

export default class locationMixin extends wepy.mixin {
  /* ============= 工具方法（mixins没法复写，就再写一遍了） ============= */
  isFunction(item) {
    return typeof item === 'function'
  }
  $getLocation(callback) {
    // 首次获取用户信息
    this._getLocation(callback)
  }
  _getLocation(callback) {
    const that = this
    wepy.getLocation({
      type: 'gcj02',
      success: function(res) {
        that.isFunction(callback) && callback(res)
        that.$apply()
      },
      fail: function() {
        that._wxAuthModal(callback)
      }
    })
  }
  /* ========================= 其他方法 ========================= */

  // 提示用户开启授权
  _wxAuthModal(callback) {
    // 先判断是否支持开启授权页的API
    wx.openSetting && wx.showModal({
      title: '授权提示',
      content: '方大通信项目管理系统要获取您的地理位置，是否允许？',
      confirmText: '是',
      cancelText: '否',
      success: (res) => {
        if (res.confirm) {
          console.log('_wxAuthModal.showModal: 用户点击确定', res)
          this._wxOpenSetting(callback)
        }
      }
    })
  }

  // 打开授权页
  _wxOpenSetting(callback) {
    wx.openSetting && wx.openSetting({
      success: ({
        authSetting
      }) => {
        console.log('wx.openSetting.success', authSetting)
        if (authSetting['scope.userLocation']) {
          // 用户打开设置，重新获取信息
          this._getLocation(callback)
        }
      }
    })
  }
}
