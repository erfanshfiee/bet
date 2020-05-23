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

    @media screen and (min-width: 320px) and (max-width: 580px) {
        #woocher{
            width: 100%;
            display: flex;
            height: 100%;
            justify-content: flex-start;
        }
        #woocher-wrapper{
            min-width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #describe p{
        }
        .display{
            display: flex;
            width: 100%;
            flex-direction: column;

        }
        form
        {
            height: 100%;
            width: 100%;
        }
        input{
            max-width: 250px;
        }
        label{
            display: flex;
            justify-content: center;
        }
    }

    @media screen and (min-width: 581px) and (max-width: 880px) {

    }


</style>
