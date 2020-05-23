<template>
    <transition name="submenu" mode="out-in">
        <ul @click="stop" v-show="this.$store.getters.isSubMenuOpen" id="cart-to-cart-sub">
<!--            halgheh zadan royeh data ke ba ajax gereftiesh-->
            <li @click="stop" v-for="data in myData">
                <div class="in">
<!--                    agar status ok bud in-->
                    <transition v-if="data.status==='ok'"name="move" mode="out-in">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="arrow income svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                    </transition>
<!--                    agar na in-->
                    <transition name="move" mode="out-in" v-else>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" class="arrow outcome svg-inline--fa fa-angle-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
                    </transition>
                </div>
<!--                neshoon dadan id-->
                <div class="id">
                    <p>{{data.id}}</p>
                </div>
<!--                neshoon dadan tarikh va zaman va gheymat-->
                <div class="info">
                    <p class="inmoney">{{data.price}}</p>
                    <p>{{data.date}}</p>
                    <p>{{data.time}}</p>
                </div>
            </li>
        </ul>
    </transition>
</template>

<script>
    import axios from "axios"
    export default {
        name: "cartToCartList",
        data()
        {
            return {
                //etelato bad az gereftan az azios mirizim into
                myData:null
            }
        },
        methods:{
            stop($e)
            {
                $e.stopPropagation()
            }
        },
        created() {
            // ba package axios darkhas ajax midan
            axios.get("/test")
                .then(res=>
                {
                    // res kol dadeh hastesh ke miad va ma faghat data ro niaz darim
                    this.myData=res.data
                })
        }
    }
</script>

<style scoped>
    .outmoney
    {
        color:rgb(167,64,67)
    }
    .inmoney{
        color:rgb(75,157,142)
    }
    .income path{
        fill: rgb(58,148,136);
    }
    .outcome path{
        fill:rgb(152,60,63)
    }
    #cart-to-cart{

    }
    ul{
        max-width:100%;
        min-width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }
    li{
        background: rgb(0,17,25);
        margin:auto;
        margin-top:5px;
        max-width:95%;
        min-width:95%;
        max-height: max-content;
        list-style: none;
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        padding:10px;
    }
    svg{
        width:35px;
        height: 35px;
    }
    .info{
        display: flex;
        flex-direction: column;
    }
    .submenu-enter-active{
        animation: openSubMenu 0.5s;
    }
    .submenu-leave-active{
        animation: closeSubMenu 0.5s ;
    }
    @keyframes openSubMenu {
        from{
            margin-right: -400px;
        }
        to{
            margin-right: 0;
        }
    }
    @keyframes closeSubMenu {
        from{
            margin-right: 0;
        }

        to{
            margin-right: 5000px;
        }
    }

</style>
