<template>
    <div id="woocher">
        <p>:ووچر پرفکت مانی</p>
        <form action="">
            <div id="woocher-wrapper" class="main-items">
                <div id="woocher-number-wrapper" class="display">
                    <label for="woocherNumber">شماره<br>ووچر:</label>
                    <input name="woocherNumber" id="woocherNumber" type="text">
                </div>
                <div id="woocher-code-number-wrapper" class="display">
                    <label for="woocherCodeNumber">کد<br>ووچر<br></label>
                    <input name="woocherCodeNumber" id="woocherCodeNumber" type="text">
                </div>
                <div id="woocher-submit" class="display">
                    <button>ثبت</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "woocher"
    }
</script>

<style scoped>
    label{
        font-size: 12pt;
        font-weight: 600;
    }
    input{
        background: rgb(0,27,39);
        height: 30px;
        border-radius: 20px;
        width: 80%;
        border:0;
        margin-left: 30px;
    }
    #woocher-wrapper{
        padding:20px;
        height: 300px;
    }
    #woocher{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

    }
    .display{
        margin-top:30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        background: rgb(0,28,42);
        border:0;
        border-radius: 20px;
        padding:5px 30px 5px 30px;
    }
    #woocher{
        grid-area: woocher;
    }
</style>
