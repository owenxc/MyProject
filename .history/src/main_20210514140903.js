// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Iview from 'iview'
import App from './App'
import router from './router//router'
import 'iview/dist/styles/iview.css'
import store from './store/store'


Vue.config.productionTip = false
Vue.use(VueRouter)


//导航守卫
// router.beforeEach((to, from, next) => {
//   if(to.path === '/login'){
//     return next()
//   }
// })


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
