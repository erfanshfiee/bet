<template>
    <div id="badbitJackpot" class="main-items">
        <div id="badbit-content">
            <p class="badbit">بدبیت</p>
            <p class="badbit">جکپات</p>
            <div id="hint"><p>اولین شخصی که با دست <span>کاره جک و یا بالاتر </span>ببازد مبلغ زیر را دریافت میکند</p></div>
            <br>
            <p id="price"> <span>5</span> <span>0</span> <span>0</span> <span>0</span> <span>0</span> <span>0</span> <span>0</span> </p>
        </div>
        <div id="image"><img src="images/clover.png"> </div>
<!--        <div class="shade"></div>-->

    </div>
</template>

<script>
    export default {
        name: "badbitJacpot"
    }
</script>

<style scoped>
    #price span{
        background: rgb(1,0,6);
        padding:7px;
        border-radius: 8px;
    }
    #image{
        display: flex;
        justify-content: flex-end;
        margin-left:40px;
    }
    #hint{
        text-align: right;
        width:200px;
    }
    #hint p{
        width:200px;
    }
    #hint span{
        color:rgb(206,106,80)
    }
    #badbitJackpot{
        display: flex;
        max-width: max-content;
        /*padding:20px 108px 20px 108px;*/
        padding:20px;
        margin-left: auto;
        padding-left: 80px;
    }
    #badbit-content{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .shade{
        background: rgb(0,13,9);
    }
    .badbit{
        font-size:20pt;
        font-weight: 700;

    }
    img{
        width: 75px;
        height: 75px;
    }
</style>
