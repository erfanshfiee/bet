<template>
    <div id="header">
        <div id="top-header">
            <div id="logo-wrapper"><p id="logo">Bellagio</p></div>
            <div @click="openMenu" id="menu"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></div>
            <div id="shape"></div>
        </div>
        <navigation></navigation>
        <customeText></customeText>
        <transition name="menu" mode="out-in">
            <my-menu v-if="this.$store.getters.isMenuOpen"></my-menu>
        </transition>
    </div>
</template>

<script>
    import navigation from "../navigation/navigation";
    import customeText from "../text/customeText";
    import myMenu from "./myMenu";
    export default {
        name: "topHeader",
        components:{
            navigation,
            customeText,
            myMenu
        },
        methods:{
            openMenu(){
                this.$store.commit("toggleMenu")
            }
        }
    }
</script>

<style scoped>
    #logo-wrapper{
        justify-self: end;
    }
    #shape{
        width:150px;
        height: 50px;
        position: absolute;
        top:40px;
        z-index: 0;
        margin-left:auto;
        border-radius: 47% 53% 50% 50% / 0% 0% 100% 100%  ;
        background: rgb(0,18,28);
    }
    #top-header{
        background: rgb(0,18,28);
        /*display:grid;*/
        /*grid-template-columns: 50% 50%;*/
        display: flex;
        justify-content: center;
        width: 100%;
    }
    svg{
        position: absolute;
        width:50px;
        height: 50px;
        right: 20px;
        top:10px;
        cursor: pointer;
    }
    path{
        fill: rgb(232,195,142);
    }
    #logo{
        font-size: 25pt;
        align-self: center;
        position: relative;
        justify-self: end;
        padding:8px;
        top:13px;
        color:rgb(235,187,139);
        z-index: 10000;
        font-family: 'BikinisPersonalUse',sans-serif;
    }
    #header{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgb(1,10,15);
    }

</style>
