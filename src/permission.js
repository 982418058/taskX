import router from './router'

router.beforeEach(async (to, from, next) => {
  if (localStorage.getItem('token')) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
