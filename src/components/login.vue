<template>
  <div class="login-page">
    <div class="login-form">
      <div class="login-content">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-user"></i>
            </div>
            <input
              type="text"
              v-model="account"
              placeholder="用户名"
              clearable
              @on-blur="verifyAccount"
              class="form-control"
              name="username"
              id="username"
              autocomplete="off"
            />
              <p class="error">{{accountError}}</p>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-key"></i>
            </div>
            <input
              type="password"
              class="form-control"
              name="password"
              id="password"
              placeholder="密码"
              autocomplete="off"
              v-model="pwd"
              prefix="md-lock"
              @on-blur="verifyPwd"
              clearable
            />
            <p class="error">{{pwdError}}</p>
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-block btn-login" :loading="isShowLoading" type="primary" @click="submit">
            <i class="fa fa-sign-in"></i>
            登录
          </button>
        </div>
        <div class="form-group">
          <em>- or -</em>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-default btn-lg btn-block facebook-button">
            &nbsp;&nbsp;
            <i class="fa fa-facebook"></i>
            微信登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      account: '',
      pwd: '',
      accountError: '',
      pwdError: '',
      isShowLoading: false,
      bg: {}
    }
  },
  created () {
    this.bg.backgroundImage =
      'url(' +
      require('../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    verifyAccount (e) {
      if (this.account !== 'admin') {
        this.accountError = '账号为admin'
      } else {
        this.accountError = ''
      }
    },
    verifyPwd (e) {
      if (this.pwd !== 'admin') {
        this.pwdError = '密码为admin'
      } else {
        this.pwdError = ''
      }
    },
    register () {
      console.log('注册账号')
    },
    forgetPwd () {
      console.log('忘记密码')
    },
    submit () {
      if (this.account === 'admin' && this.pwd === 'admin') {
        this.isShowLoading = true
        // 登陆成功 设置用户信息
        localStorage.setItem(
          'userImg',
          'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4'
        )
        localStorage.setItem('userName', '小明')
        // 登陆成功 假设这里是后台返回的 token
        localStorage.setItem('token', 'i_am_token')
        this.$router.push({ path: this.redirect || '/' })
      } else {
        if (this.account !== 'admin') {
          this.accountError = '账号为admin'
        }

        if (this.pwd !== 'admin') {
          this.pwdError = '密码为admin'
        }
      }
    }
  }
}
</script>

<style>
 .input-group .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
}
.login-page {
  width: 330px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0px 0 15px #999999;
}
.login-page .login-content {
  position: relative;
  width: auto;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-content a {
  color: #949494;
}
.login-page .login-header {
  position: relative;
  background: #373e4a;
  padding: 100px 0;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-header .description {
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 0;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-header.login-caret:after {
  position: absolute;
  content: '';
  left: 50%;
  bottom: 0;
  margin-left: -12.5px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 13px 12.5px 0 12.5px;
  border-color: #373e4a transparent transparent transparent;
  bottom: -13px;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-form {
  position: relative;
  padding-top: 60px;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-form .form-group {
  margin-bottom: 20px;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-form .form-group .input-group {
  background: #ffffff;
  border: 1px solid #a1d4f2;
  padding-top: 6px;
  padding-bottom: 6px;
  -moz-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.login-page .login-form .form-group .input-group.focused {
  border-color: #626f85;
  border-color: rgba(98, 111, 133, 0.5);
}
.login-page .login-form .form-group .input-group.validate-has-error {
  border-color: #ec5956;
  border-color: rgba(236, 89, 86, 0.5);
}
.login-page .login-form .form-group .input-group.validate-has-error .error {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -8px;
  font-size: 10px;
}
.login-page .login-form .form-group .input-group .input-group-addon,
.login-page .login-form .form-group .input-group .form-control {
  background: #ffffff;
  border: 0;
}
.login-page .login-form .form-group .input-group .input-group-addon {
  position: relative;
}
.login-page .login-form .form-group .input-group .input-group-addon:after {
  position: absolute;
  display: block;
  content: '';
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: #a1d4f2;
  -webkit-transform: scaleY(0.56);
  -moz-transform: scaleY(0.56);
  -o-transform: scaleY(0.56);
  -ms-transform: scaleY(0.56);
  transform: scaleY(0.56);
}
.login-page .login-form .form-group .input-group .form-control {
  color: #000;
}
.login-page .login-form .form-group .input-group .form-control:focus {
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.login-page .login-form .form-group.lockscreen-input {
  margin-top: -155px;
}
.login-page .login-form .form-group.lockscreen-input .lockscreen-thumb {
  position: relative;
  display: inline-block;
}
.login-page .login-form .form-group.lockscreen-input .lockscreen-thumb img {
  border: 5px solid #373e4a;
}
.login-page
  .login-form
  .form-group.lockscreen-input
  .lockscreen-thumb
  .lockscreen-progress-indicator {
  display: block;
  position: absolute;
  margin: 5px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: #ffffff;
  font-size: 19px;
  text-align: center;
  line-height: 145px;
  background: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  filter: alpha(opacity=0);
}
.login-page .login-form .form-group.lockscreen-input .lockscreen-thumb canvas {
  position: absolute;
  left: 0;
  top: 0;
}
.login-page .login-form .form-group.lockscreen-input .lockscreen-details {
  position: relative;
  padding-top: 5px;
}
.login-page .login-form .form-group.lockscreen-input .lockscreen-details h4 {
  color: #ffffff;
}
.login-page .login-form .form-group.lockscreen-input .lockscreen-details span {
  display: block;
  padding-bottom: 5px;
}
.login-page .login-form .form-group .btn-login {
  border: 1px solid #a1d4f2;
  text-align: left;
  padding: 15px 20px;
  font-size: 14px;
  -moz-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  background: #5e8fac;
  color: #fff;
}
.login-page .login-form .form-group .btn-login i {
  float: right;
}
.login-page .login-form .form-group .btn-login:hover,
.login-page .login-form .form-group .btn-login:active {
  background: #84c9f2;
}
.login-page .login-form .form-group .facebook-button,
.login-page .login-form .form-group .twitter-button,
.login-page .login-form .form-group .google-button {
  color: #fff;
  background-color: #5baf84;
  font-size: 12px;
  -moz-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}
.login-page .login-form .form-group .facebook-button i,
.login-page .login-form .form-group .twitter-button i,
.login-page .login-form .form-group .google-button i {
  margin: 0 auto;
  background-color: #385490;
  -moz-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}
.login-page .login-form .form-group .facebook-button:hover,
.login-page .login-form .form-group .twitter-button:hover,
.login-page .login-form .form-group .google-button:hover {
  background-color: rgba(59, 89, 152, 0.8);
}
.login-page .login-form .form-group .facebook-button:hover i,
.login-page .login-form .form-group .twitter-button:hover i,
.login-page .login-form .form-group .google-button:hover i {
  background-color: #31497e;
}
.login-page .login-form .form-group .facebook-button.twitter-button,
.login-page .login-form .form-group .twitter-button.twitter-button,
.login-page .login-form .form-group .google-button.twitter-button {
  background-color: #4099ff;
}
.login-page .login-form .form-group .facebook-button.twitter-button i,
.login-page .login-form .form-group .twitter-button.twitter-button i,
.login-page .login-form .form-group .google-button.twitter-button i {
  background-color: #0d7eff;
}
.login-page .login-form .form-group .facebook-button.twitter-button:hover,
.login-page .login-form .form-group .twitter-button.twitter-button:hover,
.login-page .login-form .form-group .google-button.twitter-button:hover {
  background-color: rgba(64, 153, 255, 0.8);
}
.login-page .login-form .form-group .facebook-button.twitter-button:hover i,
.login-page .login-form .form-group .twitter-button.twitter-button:hover i,
.login-page .login-form .form-group .google-button.twitter-button:hover i {
  background-color: #0071f3;
}
.login-page .login-form .form-group .facebook-button.google-button,
.login-page .login-form .form-group .twitter-button.google-button,
.login-page .login-form .form-group .google-button.google-button {
  background-color: #d34836;
}
.login-page .login-form .form-group .facebook-button.google-button i,
.login-page .login-form .form-group .twitter-button.google-button i,
.login-page .login-form .form-group .google-button.google-button i {
  background-color: #b03626;
}
.login-page .login-form .form-group .facebook-button.google-button:hover,
.login-page .login-form .form-group .twitter-button.google-button:hover,
.login-page .login-form .form-group .google-button.google-button:hover {
  background-color: rgba(211, 72, 54, 0.8);
}
.login-page .login-form .form-group .facebook-button.google-button:hover i,
.login-page .login-form .form-group .twitter-button.google-button:hover i,
.login-page .login-form .form-group .google-button.google-button:hover i {
  background-color: #9b3022;
}
.login-page .login-bottom-links {
  padding-top: 40px;
  padding-bottom: 30px;
}
.login-page .login-bottom-links a {
  -moz-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}
.login-page .login-bottom-links a:hover {
  color: #aeaeae;
}
.login-page .login-bottom-links .link {
  font-size: 14px;
  display: inline-block;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-bottom-links .link:hover {
  color: #ffffff;
}
.login-page .login-progressbar {
  height: 0px;
  width: 100%;
  overflow: hidden;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-progressbar div {
  width: 0%;
  -moz-transition: 700ms all cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: 700ms all cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: 700ms all cubic-bezier(0.77, 0, 0.175, 1);
  transition: 700ms all cubic-bezier(0.77, 0, 0.175, 1);
}
.login-page .login-progressbar-indicator {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 100%;
  margin-top: 80px;
  visibility: hidden;
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: translateY(100px) scale(0.2);
  -moz-transform: translateY(100px) scale(0.2);
  -o-transform: translateY(100px) scale(0.2);
  -ms-transform: translateY(100px) scale(0.2);
  transform: translateY(100px) scale(0.2);
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page .login-progressbar-indicator h3 {
  color: #fff;
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
}
.login-page.logging-in {
  overflow: hidden;
}
.login-page.logging-in .login-header {
  padding-top: 170px;
  padding-bottom: 30px;
}
.login-page.logging-in .login-header.login-caret:after {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  filter: alpha(opacity=0);
}
.login-page.logging-in .login-header .description {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  filter: alpha(opacity=0);
}
.login-page.logging-in .login-form form,
.login-page.logging-in .login-form .link {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: translateY(-200px) scale(0.8);
  -moz-transform: translateY(-200px) scale(0.8);
  -o-transform: translateY(-200px) scale(0.8);
  -ms-transform: translateY(-200px) scale(0.8);
  transform: translateY(-200px) scale(0.8);
}
.login-page.logging-in .login-progressbar {
  background: #515b6d;
  height: 2px;
}
.login-page.logging-in .login-progressbar div {
  background: #de6c65;
  height: 2px;
}
.login-page.logging-in .login-progressbar-indicator {
  visibility: visible;
  -webkit-opacity: 1;
  -moz-opacity: 1;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translateY(0px) scale(1);
  -moz-transform: translateY(0px) scale(1);
  -o-transform: translateY(0px) scale(1);
  -ms-transform: translateY(0px) scale(1);
  transform: translateY(0px) scale(1);
}
.login-page.logging-in-lockscreen
  .login-form
  .form-group.lockscreen-input
  .lockscreen-thumb
  .lockscreen-progress-indicator {
  -webkit-opacity: 1;
  -moz-opacity: 1;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
  filter: alpha(opacity=100);
  visibility: visible;
}
.login-page.logging-in-lockscreen .login-form .form-group:nth-child(n + 2),
.login-page.logging-in-lockscreen .login-form .link {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: translateY(-50px) scale(0.5);
  -moz-transform: translateY(-50px) scale(0.5);
  -o-transform: translateY(-50px) scale(0.5);
  -ms-transform: translateY(-50px) scale(0.5);
  transform: translateY(-50px) scale(0.5);
}
.login-page.login-form-fall .login-form {
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  filter: alpha(opacity=0);
  top: -100px;
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
}
.login-page.login-form-fall .login-form .form-group {
  -moz-transition: all 550ms ease-in-out;
  -o-transition: all 550ms ease-in-out;
  -webkit-transition: all 550ms ease-in-out;
  transition: all 550ms ease-in-out;
  -moz-transition-delay: 250ms;
  -o-transition-delay: 250ms;
  -webkit-transition-delay: 250ms;
  transition-delay: 250ms;
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  filter: alpha(opacity=0);
}
.login-page.login-form-fall .login-form .form-group:nth-child(2) {
  -moz-transition-delay: 350ms;
  -o-transition-delay: 350ms;
  -webkit-transition-delay: 350ms;
  transition-delay: 350ms;
}
.login-page.login-form-fall .login-form .form-group:nth-child(3) {
  -moz-transition-delay: 450ms;
  -o-transition-delay: 450ms;
  -webkit-transition-delay: 450ms;
  transition-delay: 450ms;
}
.login-page.login-form-fall .login-form .form-group:nth-child(4) {
  -moz-transition-delay: 550ms;
  -o-transition-delay: 550ms;
  -webkit-transition-delay: 550ms;
  transition-delay: 550ms;
}
.login-page.login-form-fall .login-form .form-group:nth-child(5) {
  -moz-transition-delay: 650ms;
  -o-transition-delay: 650ms;
  -webkit-transition-delay: 650ms;
  transition-delay: 650ms;
}
.login-page.login-form-fall .login-form .form-group:nth-child(6) {
  -moz-transition-delay: 750ms;
  -o-transition-delay: 750ms;
  -webkit-transition-delay: 750ms;
  transition-delay: 750ms;
}
.login-page.login-form-fall .login-form .form-group:nth-child(8) {
  -moz-transition-delay: 850ms;
  -o-transition-delay: 850ms;
  -webkit-transition-delay: 850ms;
  transition-delay: 850ms;
}
.login-page.login-form-fall .login-form .form-group:nth-child(9) {
  -moz-transition-delay: 950ms;
  -o-transition-delay: 950ms;
  -webkit-transition-delay: 950ms;
  transition-delay: 950ms;
}
.login-page.login-form-fall-init .login-form {
  -webkit-opacity: 1;
  -moz-opacity: 1;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
  filter: alpha(opacity=100);
  top: 0;
}
.login-page.login-form-fall-init .login-form .form-group {
  -webkit-opacity: 1;
  -moz-opacity: 1;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
  filter: alpha(opacity=100);
}
.login-page .form-steps .step {
  display: none;
}
.login-page .form-steps .step.current {
  display: block;
}
.login-page .form-register-success,
.login-page .form-forgotpassword-success,
.login-page .form-login-error {
  display: none;
  background: #00a651;
  color: #ffffff;
  padding: 10px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 30px;
  overflow: hidden;
}
.login-page .form-register-success.visible,
.login-page .form-forgotpassword-success.visible,
.login-page .form-login-error.visible {
  display: block;
}
.login-page .form-register-success i,
.login-page .form-forgotpassword-success i,
.login-page .form-login-error i {
  position: relative;
  font-size: 25px;
  background: #008d45;
  display: block;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: -10px;
  margin-left: -10px;
  margin-right: -10px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
}
.login-page .form-register-success h3,
.login-page .form-forgotpassword-success h3,
.login-page .form-login-error h3 {
  font-size: 15px;
  color: #ffffff;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 5px;
}
.login-page .form-register-success p,
.login-page .form-forgotpassword-success p,
.login-page .form-login-error p {
  font-size: 11px;
  margin: 0;
}
.login-page .form-register-success.form-login-error,
.login-page .form-forgotpassword-success.form-login-error,
.login-page .form-login-error.form-login-error {
  padding: 0;
  background: #cc2424;
}
.login-page .form-register-success.form-login-error h3,
.login-page .form-forgotpassword-success.form-login-error h3,
.login-page .form-login-error.form-login-error h3 {
  background: #b62020;
  padding: 10px;
  margin: 0;
  margin-bottom: 5px;
  font-size: 12px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
}
.login-page .form-register-success.form-login-error p,
.login-page .form-forgotpassword-success.form-login-error p,
.login-page .form-login-error.form-login-error p {
  padding: 10px;
}
@media (max-width: 991px) {
  .login-page .login-header {
    padding: 20px 0;
  }
  .login-page .login-form {
    padding-top: 30px;
  }
  .login-page .login-form .form-group.lockscreen-input {
    margin-top: 0;
  }
  .login-page.logging-in .login-header {
    padding-top: 34px;
    padding-bottom: 6px;
  }
  .login-page.logging-in .login-progressbar-indicator {
    margin-top: 60px;
  }
  .login-page.logging-in .login-form form,
  .login-page.logging-in .login-form .link {
    -webkit-transform: translateY(-100px) scale(0.6);
    -moz-transform: translateY(-100px) scale(0.6);
    -o-transform: translateY(-100px) scale(0.6);
    -ms-transform: translateY(-100px) scale(0.6);
    transform: translateY(-100px) scale(0.6);
  }
}
@media (max-width: 350px) {
  .login-page .login-content {
    width: 280px;
  }
}
@media (max-width: 650px) {
  .login-page {
    box-shadow: none;
  }
}
</style>
