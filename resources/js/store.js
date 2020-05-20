import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        isMenuOpen:false
    },
    getters:
        {
            isMenuOpen:state=>{
                return state.isMenuOpen
            }
        },
    mutations:{
        toggleMenu:state=>{
            state.isMenuOpen=!state.isMenuOpen
        }
    }
})
