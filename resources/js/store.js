import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        isMenuOpen:false,
        isSubMenuOpen:false
    },
    getters:
        {
            isMenuOpen:state=>{
                return state.isMenuOpen
            },
            isSubMenuOpen:state=>{
                return state.isSubMenuOpen
            }
        },
    mutations:{
        toggleMenu:state=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        toggleSub:state=>{
            state.isSubMenuOpen=!state.isSubMenuOpen
        }
    }
})
