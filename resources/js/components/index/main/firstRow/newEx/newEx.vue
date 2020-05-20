<template>
    <div id="newEx">
        <img id="newExImg" src="/images/new-ex.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "newEx",
        mounted() {
            const newExWidth=document.querySelector("#newEx").clientWidth
            const newExHeight=document.querySelector("#newEx").clientHeight
            const img=document.getElementById('newExImg')
            console.log(newExHeight,newExWidth)
            img.width=newExWidth+'px'
            img.height=newExHeight+'px'
        }
    }
</script>

<style scoped>
    img{
        padding:0;
        width: 100%;
        height: 100%;
    }
    #newEx{
        border-radius: 12px;
        border:3px solid rgb(1,12,18);
        display: flex;
        width: 100%;
        height: 200px;
        justify-content: center;
        align-items: center;
        /*background: url("/images/new-ex.png") no-repeat;*/
        /*background-size: cover;*/
        /*background-position: center;*/
        margin:20px;
    }
    /*div{*/
    /*    background: url("/images/new-ex.png") no-repeat center / contain;*/
    /*    height: 200px;*/
    /*    !*width:100%;*!*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    padding:20px;*/
    /*    margin:20px;*/
    /*    border:3px solid rgb(1,12,18);*/
    /*    border-radius: 5px;*/
    /*}*/
</style>
