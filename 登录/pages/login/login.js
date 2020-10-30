Page({
  // 设置data中的username和psw初始值为null
  data: {
    username: '',
    psw: ''
  },
  showusername(username) {
    // 将学号记录下来，然后设置到data里
    this.setData({
      username: username.detail.value
    })
    // 打印学号
    console.log(username.detail.value)
  },
  showpsw(psw) {
    // 将密码记录下来，然后设置到data里
    this.setData({
      psw: psw.detail.value
    })
    // 打印密码在日志文件里
    console.log(psw.detail.value)
  },
  // 登录方法
  login() {
    // 判断学号和密码是不是都为空
    if (this.data.username.length == 0 && this.data.psw.length == 0) {
      wx.showToast({
        title: '学号和密码呢',
      })
    } else {
      // 在学号和密码不是都为空的情况下判断学号是否为空
      if (this.data.username.length == 0) {
        wx.showToast({
          title: '学号呢',
        })
      } else {
        // 在学号和密码不是都为空的情况下判断密码是否为空
        if (this.data.psw.length == 0) {
          wx.showToast({
            title: '密码呢',
          })
        } else {
          // 学号和密码都不为空所以转到登录成功界面
          wx.redirectTo({
            url: '/pages/end/end',
          })
        }
      }

    }
  },

  // 注册按钮的切换页面方法
  toregister() {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  }
})