<template>
  <div id="app" class="bs-example">
    <div id="nav">
        <div class="content">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand href="#">任务系统</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">首页</b-nav-item>
                    <b-nav-item href="#" disabled>帮助</b-nav-item>
                </b-navbar-nav>
                </b-collapse>
                <b-navbar-nav class="ml-auto">
                    <b-button variant="info">登录</b-button>
                </b-navbar-nav>
            </b-navbar>
        </div>
    </div>
    <router-view />
  </div>
</template>

<style>
html,body{
    background:#f2f3f5;
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
  background: #343a40
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .content{
    max-width:1080px;
    margin: 0 auto;
}
</style>
