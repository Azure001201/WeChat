Page({
  // 设置data中的username和psw初始值为null
  data: {
    username: '',
    psw: ''
  },
  usernameinput(username) {
    // 将学号记录下来，然后设置到data里
    this.setData({
      username: username.detail.value
    })
  },
  pswinput(psw) {
    // 将密码记录下来，然后设置到data里
    this.setData({
      psw: psw.detail.value
    })
  },
  // 注册方法
  register() {
    // 判断学号和密码是不是都为空
    if (this.data.username.length == 0 && this.data.psw.length == 0) {
      wx.showToast({
        title: '什么都还没填咧，怎么注册',
      })
    } else {
      // 在学号和密码不是都为空的情况下判断学号是否为空
      if (this.data.username.length == 0) {
        wx.showToast({
          title: '要注册的学号呢',
        })
      } else {
        // 在学号和密码不是都为空的情况下判断密码是否为空
        if (this.data.psw.length == 0) {
          wx.showToast({
            title: '请输入密码',
          })
        } else {
          wx.navigateTo({
            url: '/pages/login/login',
          }),
          wx.showToast({
            title: '注册成功啦',
          })
          }
      }

    }
  }
})