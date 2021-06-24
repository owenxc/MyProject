import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins:[createPersistedState()],
    state:{
        U:'',
        isLogin:false,
        asideDrawer:false,
    },
    mutations:{
        changeUM(state,value){
            state.UM = value;
        },
        changeIsLogin(state,value){
            state.IsLogin = value
        },
        changeAsideDrawer(state,value){
            state.asi
        }
    },
    actions:{
        actionChangeUM(contex,value){
            contex.commit('changeUM',value)
        },
        actionChangeIsLogin(contex,value){
            contex.commit('changeIsLogin',value)
        }
    }
})

export default store