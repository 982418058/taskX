<template>
  <div id="app" class="bs-example">
    <div id="nav">
      <div class="content">
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <b-navbar-brand href="#">任务系统</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">主页</b-nav-item>
              <b-nav-item href="#" disabled>功能</b-nav-item>
              <b-nav-item href="#" disabled>展示</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <b-navbar-nav class="ml-auto">
            <b-button @click="userOperate">登出</b-button>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    userOperate () {
      // 使用bootstrap的confirm
      this.boxOne = ''
      let t = this
      t.$bvModal.msgBoxConfirm('是否登出？')
        .then(value => {
          if (value) {
            // 退出登陆 清除用户资料
            localStorage.setItem('token', '')
            localStorage.setItem('userImg', '')
            localStorage.setItem('userName', '')
            t.$router.replace({ name: 'login' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style>
html,
body {
  background: #f2f3f5;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 0 auto;
  background: #343a40;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .content {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
