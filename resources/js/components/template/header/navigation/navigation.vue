<template>
    <div id="navigation">
            <button @click="toggleMenu" >{{menu}}</button>
            <div id="listwrapper">
            <transition name="fadeMe" mode="out-in">
                <ul id="list" v-if="isShow">
                    <router-link active-class="active" to="/" tag="li" exact><a>خانه</a></router-link>
                    <li><a href="#">پوکر</a></li>
                    <router-link to="/deposite" tag="li" active-class="active"><a>واریز وجه</a></router-link>
                    <router-link active-class="active" to="/cashOut" tag="li"><a>برداشت وجه</a></router-link>
                    <router-link active-class="active" to="/invite" tag="li"><a>دعوت دوستان</a></router-link>
                    <router-link active-class="active" to="/profile" tag="li"><a>پروفایل</a></router-link>
                    <li><a href="#">خروج</a></li>
                </ul>
            </transition>
            </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data()
        {
            return{
                isShow:true,
                menu:'بستن منو'
            }
        },
        mounted() {
            console.log(document.getElementById("list").style.display)
        },
        methods:{
            toggleMenu(){
                this.isShow=!this.isShow
                if(this.menu=='بستن منو')
                {
                    this.menu='باز کردن منو'
                }
                else{
                    this.menu='بستن منو'
                }
            }
        }
    }
</script>

<style scoped>
    li:active a {
        color:rgb(228,188,129)
    }

    li.active a {
        color:rgb(228,188,129);
    }
    #listwrapper{
        overflow: hidden;
    }
    #list{
        display: flex;
        flex-direction: row;
        color:white;
        justify-content: flex-end;

    }
    ul li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
        color:white;
        font-family: "BYekan",sans-serif;
        font-weight: 600;
        padding:10px;
    }
    #navigation{
        background: rgb(2,13,19);
        width: 100%;
    }
    #list{
        margin-right: 30px;
        padding:10px;
    }
    button{
        display: none;
    }
    @media screen and (max-width: 615px) {
        button{
            display: block;
        }
        #navigation{
            display: flex;
            flex-direction: column;
            align-items: center;
            max-height: max-content;
            justify-content:center;
        }
        button{
            margin-top: 20px;
            background: black;
            padding: 10px 20px 10px 20px;
            border:0;
            border-radius: 20px;
        }
        #list{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            overflow: hidden;
            height: max-content;
            margin:0;
            margin-top:30px;
        }



        .fadeMe-enter-active{
            animation: fadeIn 0.5s linear;
        }
        .fadeMe-leave-active{
            animation: fadeOut 0.5s linear;
        }
        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: translateY(-500px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeOut {
            0% {
                opacity: 1;
                transform: translateY(0);
            }
            100% {
                opacity: 0;
                transform: translateY(-500px);
            }
        }





    }
    @media screen and (max-width: 1280px)
    {
        #navigation{
            padding-top:25px
        }
    }



</style>
