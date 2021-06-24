import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        isLogin:false,
        asideDrawer:false,
    },
    mutations:{
        changeIsLogin(state,value){
            state.IsLogin = value
        },
        changeAsideDrawer(state,value){
            state.asideDrawer = value
        }
    },
    actions:{
        actionChangeUM(contex,value){
            contex.commit('changeUM',value)
        },
        actionChangeIsLogin(contex,value){
            contex.commit('changeIsLogin',value)
        },
        actionChangeAsideDrawer(contex,value){
            contex.commit('changeAsideDrawer',value)
        }
    }
})

export default store