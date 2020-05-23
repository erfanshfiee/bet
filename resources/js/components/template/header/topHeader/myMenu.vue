<template>
    <div @click="closeMenu" id="menu">
        <transition name="menu" mode="out-in">
            <div id="whole-menu-wrapper">
                <div @click="stop" id="menu-header">
                    <div id="menu-header-wrapper">
                        <div @click="closeMenu" id="close">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                        </div>
                        <div id="user-info">
                            <div id="level">
                                <div id="level-visual">
                                    26
                                </div>
                            </div>
                            <div id="user-money">
                                <p id="userName">JthePSY</p>
                                <p id="user-money-remain">1,500,000</p>
                            </div>
                            <div id="user-point">
                                <p>جایزه ی <br> این مرحله:
                                <p>2,000,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div @click="stop" id="menu-list">
                    <ul @click="stop">
                        <li class="side">
                            <div class="wrapper">
                                <p>بازی پوکر</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                            </div>
                        </li>
                        <li class="side">
                            <div class="wrapper">
                                <p>بازی بلک جک</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                            </div>
                        </li>
                        <li class="side">
                            <div class="wrapper">
                                <p>بازی رولت</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                            </div>
                        </li>
                        <li class="side">
                            <div class="wrapper">
                                <p>بازی ویدیویی پوکر</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>
                            </div>
                        </li>
                        <li id="main-item" @click=openSubMenu>
                            <div class="wrapper">
                                <svg v-if="isShow" id="left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                                <p >لیست واریز ها و برداشت ها</p>
                                <svg @click="stop" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-invoice-dollar" class="svg-inline--fa fa-file-invoice-dollar fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z"></path></svg>
                            </div>
                            <cart-to-cart-list></cart-to-cart-list>

                        </li>
                        <li class="side">
                            <div class="wrapper">
                                <p>اموزش بازی ها</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" class="svg-inline--fa fa-book fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>
                            </div>
                        </li>
                        <li class="side">
                            <div class="wrapper">
                                <p>اطلاعات جوایز لول</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" class="svg-inline--fa fa-gem fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path></svg>
                            </div>
                        </li>
                        <li class="side">
                            <div class="wrapper">
                                <p>قوانین</p>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gavel" class="svg-inline--fa fa-gavel fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657 39.598 39.598-81.04 81.04-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657 81.04-81.04 39.598 39.598-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941z"></path></svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import cartToCartList from "./subMenu/cartToCartList";
    export default {
        name: "myMenu",
        components:{
            cartToCartList
        },
        data(){
            return{
               myStyle:null
            }
        },
        mounted() {
            // const styles=document.defaultView.getComputedStyle(document.querySelector('#main-item'),null)
            // this.myStyle=styles
            // console.log(this.myStyle)
        },
        methods:{
            closeMenu(){
                this.$store.commit("toggleMenu")
                this.$store.state.isSubMenuOpen=false
            },
            stop($e) {
                $e.stopPropagation()
            },
            openSubMenu($e)
            {
                console.log($e.target.tagName)
                const Lis=Array.from(document.querySelectorAll(".side"))
                const myLi=$e.target.parentElement.parentElement.parentElement
                if(this.$store.getters.isSubMenuOpen==false)
                {
                    // $e.target.parentElement.parentElement.style.backgroundColor='rgb(0,0,0)'
                    if($e.target.id=="main-item")
                    {

                        $e.target.style.backgroundColor='rgb(0,0,0)'
                    }
                    if($e.target.tagName=="path")
                    {
                        myLi.style.backgroundColor='rgb(0,0,0)'
                    }
                    if($e.target.tagName=="DIV")
                    {
                        $e.target.parentElement.style.backgroundColor='rgb(0,0,0)'
                    }

                    else{
                        $e.target.parentElement.parentElement.style.backgroundColor='rgb(0,0,0)'
                    }
                    Lis.forEach(li=>{
                        li.style.display="none"
                    })
                    this.$store.commit('toggleSub')
                }else{
                    this.$store.commit('toggleSub')

                    setTimeout(()=>{
                        Lis.forEach(li=>{
                            li.style.display="flex"
                        })
                        if($e.target.id=="main-item")
                        {

                            $e.target.style.backgroundColor='rgb(0,9,14)'
                        }
                        if($e.target.tagName=="path")
                        {
                            myLi.style.backgroundColor='rgb(0,9,14)'
                        }
                        if($e.target.tagName=="DIV")
                        {
                            $e.target.parentElement.style.backgroundColor='rgb(0,9,14)'
                        }
                        else{
                            $e.target.parentElement.parentElement.style.backgroundColor='rgb(0,9,14)'
                        }

                        // $e.target.parentElement.parentElement.style.backgroundColor='rgb(0,9,14)'

                    },500)
                }

            }
        },
        computed:{
            isShow()
            {
                return this.$store.getters.isSubMenuOpen
            }
        }
    }
</script>


<style scoped>
    #left{
        width:40px;
        height: 40px;
    }
    #user-point{
        margin-left: 30px;
        display: flex;
        align-items: flex-end;
    }
    #level{
        margin-left: 10px;
    }
    #user-point p{
        font-size:9pt;
        color:rgb(49,49,49)
    }
    #user-money{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
    #close{
        cursor: pointer;
    }
    #userName{
        color:rgb(223,194,134)
    }
    #user-money-remain{
        color:rgb(73,165,144);
        font-size:12pt;
    }
    #whole-menu-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    #level-visual{
        background: url("/images/level.png") no-repeat center / cover;
        width:60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #menu-header-wrapper{
        display: flex;
        width:320px;
        flex-direction: column;
        background: rgb(0,0,0);
        align-items: flex-start;
    }
    #user-info{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #menu-header{
        width: 320px;
        display: flex;
        justify-content: flex-end;
    }
    #menu-header svg{
        height: 40px;
        width: 40px;
    }
    #menu{
        position: absolute;
        z-index: 9999999999999999;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
    }
    #menu-list{
        height: 100%;
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

    }
    #menu-list ul{
        width: 320px;
        background: rgb(0,0,0);
        height: 100%;
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: flex-end;
    }
    #menu-list ul li{
        display: flex;
        background: rgb(0,9,14);
        width: 100%;
        margin-top: 5px;
        padding:5px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    #menu-list ul li p{
        margin-right: 10px;
    }
    svg{
        width:20px;
        height: 20px;
        margin-right: 10px;
    }
    path{
        fill:rgb(202,168,123)
    }


    li{
        cursor: pointer;
    }



    .menu-enter-active{
        animation: menu-in 0.5s;
    }
    .menu-leave-active{
        animation: menu-out 0.5s;
    }

    @keyframes menu-in {
        from{
            /*margin-right: -320px;*/
            transform: scale(0);
        }
        to{
            transform: scale(1);

        }
    }
    @keyframes menu-out {
        from{
            /*margin-right: -320px;*/
            transform: scale(1);
        }
        to{
            transform: scale(0);
        }
    }
</style>
