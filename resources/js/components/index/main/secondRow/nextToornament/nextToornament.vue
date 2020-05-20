<template>
    <div id="nextToornament" class="main-items">
        <div id="money-content">
            <p class="toornament">تورنومنت</p>
            <p class="toornament">بعدی</p>
            <p style="color: rgb(244,101,129);">FRIDAY MILLIONS NL Holdem</p>
            <p>تعداد شرکت کنندگان:20 نفر از 100</p>
            <p>ورودی:  100000</p>
            <p>شروع</p>
            <p id="time">   در: &nbsp; &nbsp; &nbsp; &nbsp; <span>6</span>  <span>5</span> : <span>4</span>  <span>3</span> : <span>2</span> <span>1</span></p>
        </div>
        <div><img id="money" src="images/money.png"/></div>
    </div>
</template>

<script>
    export default {
        name: "nextToornament"
    }
</script>

<style scoped>
    .toornament{
        font-weight: 700;
        font-size: 20pt;
    }
    #money-content{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    span{
        background: rgb(1,0,6);
        padding:10px;
        border-radius: 8px;
    }
    #money{
        width:75px;
        height: 75px;
    }
    #nextToornament{
        display: flex;
        justify-content: flex-end;
        padding:20px;
        max-width: max-content;
    }
</style>
