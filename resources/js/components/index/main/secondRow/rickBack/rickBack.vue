<template>
    <div id="rickBack" class="main-items">
        <div id="rick-hint">
            <div id="rick-text-hint">
                <p>10 % <br><span id="back"> ریک بک</span></p>
            </div>
            <div id="rick-img">
                <img src="images/coin.png" alt="">
            </div>
        </div>
        <div id="rick-content">
            <p>ریک بک شما : <span id="rick-content-price">5000</span></p>
            <form action="">
                <button class="recive">دریافت</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rickBack",
        mounted() {
            let profileWidth=document.getElementById("profile").offsetWidth
            // let profileMarginRight=document.getElementById("profile").style.marginRight
            // console.log(profileMarginRight)
            document.querySelector("#rickBack").style.width=profileWidth+"px"
            // document.querySelector("#rickBack").style.marginRight=profileMarginRight+"px"


        }
    }
</script>

<style scoped>
    #rick-hint{
        display: flex;
        justify-content: flex-end;

    }
    #rick-text-hint{
        margin-right: 10px;
        margin-top: 10px;
        font-size: 20pt;
        font-weight: 600;
        text-align: right;
    }
    #back{
        font-size: 25pt;
        word-spacing: 8px;
    }
    #rickBack{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    #rick-img{
        margin-right: 40px;
    }
    #rick-content{
        text-align: right;
        margin: auto auto;
        /*margin-top: 40px;*/
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #rick-content button{
        margin-top:20px;
    }
    img{
        width:75px;
        height: 75px;
        margin-top: 10px;
    }
    .recive{
        background: rgb(0,28,42);
        border-radius: 10px;
        padding:5px 20px 5px 20px;
        text-align: center;
        border:0;
    }
    #rick-content-price{
        color:rgb(70,165,143)
    }
    @media screen and (min-width: 320px) and (max-width: 650px) {
        #rickBack{
            height: max-content;
            padding:0;
            margin:0;
            margin-top: 10px;
            justify-content: center;
            align-items: flex-end;
            max-width: 100%;
            min-width: 100%;
        }
        #rick-hint{
            display: flex;
            justify-content: center;
            max-width: 100%;
            min-width: 100%;
        }
        #rick-img{
            margin-right: 0;
        }
    }
    @media screen and (min-width: 651px) and (max-width: 999px) {
        #rickBack{
            height: max-content;
            padding:0;
            margin:0;
            min-height: 100%;
            max-height: 100%;
            justify-content: center;
            align-items: flex-end;
            max-width: 100%;
            min-width: 100%;
        }
        #rick-hint{
            display: flex;
            justify-content: center;
            max-width: 100%;
            min-width: 100%;
        }
        #rick-img{
            margin-right: 0;
        }
    }
    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        #rickBack{
            height: max-content;
            padding:0;
            margin:0;
            min-height: 100%;
            max-height: 100%;
            justify-content: center;
            align-items: flex-end;
            max-width: 100%;
            margin-left: auto;
            min-width: 100%;
        }
        #rick-hint{
            display: flex;
            justify-content: center;
            max-width: 100%;
            min-width: 100%;
        }
        #rick-img{
            margin-right: 0;
        }
    }
</style>
