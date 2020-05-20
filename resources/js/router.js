import profile from "./components/profile/profile.vue"
import index from "./components/index/index.vue"
import invite from "./components/invite/invite.vue"
import cashOut from "./components/cashOut/cashOut";
import deposite from "./components/deposit/deposite";
export const routes=[
    {path:"",component:index},
    {path:"/invite",component:invite},
    {path:"/profile",component:profile},
    {path:"/deposite",component:deposite},
    {path:'/cashOut',component:cashOut}
]
