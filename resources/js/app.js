/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from "vue"
import VueRouter from "vue-router"
import index from "./components/index/index";
import topHeader from "./components/template/header/topHeader/topHeader";
import myFooter from "./components/template/footer/footer";
import invite from "./components/invite/invite";
import wrapper from "./components/wrapper";
import Vuex from "vuex"
import {store} from "./store"
import {routes} from "./router"
Vue.use(VueRouter)
Vue.use(Vuex)
const router=new VueRouter({
    mode:"history",
    routes
})
const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        index,
        wrapper,
        topHeader,
        myFooter,
        invite
    }
});
import css from  "../../public/css/app.css"
