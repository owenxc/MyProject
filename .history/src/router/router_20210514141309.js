import VueRouter from 'vue-router'

import login from '../components/login/login'
import mainPage from '../components/mainPage'
Vue.use(VueRouter)


const routers = [
  { path: '/', redirect:'/login'},
  { path:'/login', component:login},
  { path:'/mainPage', component:mainPage,
    //  children:[
    //    {path:'/asiderBar', component:asiderBar, meta:{isLogin:true}}
    //  ]


  }
]

const router = new VueRouter({
   mode:'hash',
   routes:routers
})
export default router
