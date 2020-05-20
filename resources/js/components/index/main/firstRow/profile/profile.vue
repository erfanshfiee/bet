<template>
    <div id="profile" class="main-items">
        <div id="mojoodi">
            <p class="user-profile">خوش آمدید</p>
            <p id="user-name">JThePsy</p>
            <p class="user-profile">:موجودی شما</p>
            <p id="price">1,500,000</p>
            <form>
                <button id="information">اطلاعات جوایز</button>
            </form>
        </div>
        <div id="level">
            <p>26</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>
    #profile{
        display: flex;
        height: 200px;
        padding:20px 50px 20px 50px;
        /*box-shadow: 2px -2px 5px black,-2px 2px 5px black,-2px -2px 5px black,2px 2px 5px black;*/
        justify-content: space-between;
        align-items: center;
        margin-right: 50px;
    }
    #level{
        display: flex;
        background: url("/images/level.png") no-repeat center / cover;
        width:120px;
        height: 120px;
        justify-content: center;
        align-items: center;;
    }
    .user-profile{
        color:rgb(230,186,139);
        font-size: 10pt;
    }
    #mojoodi{
        width:max-content;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    #user-name{
        color:rgb(230,143,136);
        font-size: 20pt;
        font-weight: 700;
    }
    #price{
        color:rgb(63,163,139);
        font-weight: 700;
    }
    #information{
        background: rgb(63,156,85);
        border-radius: 10px;
        color:rgb(255,251,251);
        border:0;
        padding:2px 10px 2px 10px;
        font-size: 14pt;
    }
</style>
