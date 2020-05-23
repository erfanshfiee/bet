<template>
    <div id="text">
        <div>
            <p class="title">دعوت دوستان</p>
            <p><span>اطلاعات:</span> با دعوت دوستان خود با استفاده از لینک زیر شما میتوانید</p>
            <p> از بازی پوکر انها دریافت کنید .%30</p>
            <p class="title">:لینک دعوت</p>
        </div>
        <div id="invite-link" class="main-items">
            <p>https:\\www.bellagio.com/sssssssssssssssssssssssssssssss</p>
        </div>

    </div>
</template>

<script>

    export default {
        name: "inviteText",

    }
</script>

<style scoped>
    #invite-link{
        background: rgb(0,15,22);
        display: flex;
        margin-right: 30px;
        justify-content: flex-start;
        width:95%;
        padding:10px;
        border-radius: 15px;
        margin: auto;
        overflow: auto;
    }
    p{
        font-size:15pt;

    }
    .title{
        font-size: 18pt;
    }
    h1{
        font-size:22pt;
        font-weight: 600;
    }
    #text{
        text-align: right;
        display: flex;
        align-items: flex-end;
        width:100%;
        flex-direction: column;
    }
    h1{
        margin-right: -20px;
    }
    span{
        color:rgb(227,192,138)
    }
</style>
