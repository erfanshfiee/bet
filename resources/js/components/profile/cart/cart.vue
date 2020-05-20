<template>
    <div id="cart">
        <p class="title">:جزئیات کارت بانکی</p>
        <div id="shetab-wrapper">
            <div id="shetab">
                <div id="shetab-img">
                    <img src="/images/shetab.png">
                </div>
                <div id="shetab-number">
                    <p>6037 9975 1234 5678</p>
                </div>
                <div id="roshan">
                    <div id="shetab-sheba">
                        <p>sheba: IR 1234567891011121314151</p>
                    </div>
                    <div id="shetab-name">
                        <p>ali rabie</p>
                    </div>
                    <div id="shetab-exp-cvv">
                        <div><p>expiration date:1399/9/9</p></div>
                        <div><p>CVV2:1234</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cart"
    }
</script>

<style scoped>
    #shetab-wrapper{
        width: 100%;
    }
    #shetab-exp-cvv p{
        font-size: 10pt;
    }
    #shetab-exp-cvv{
        display: flex;
        width:100%;
        justify-content:space-between;
        padding:5px;
        font-weight: 600;
    }
    .title{padding:10px;}
    #shetab-sheba p{
        font-weight: 600;
        font-size: 12pt;
    }
    #shetab-name{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding:8px;
        font-size: 15pt;
        font-weight: 600;
    }
    #roshan
    {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right,rgb(154,33,66),rgb(219,70,64));
        border-radius: 20px;
        padding-bottom: 15px;
        width:97%;
    }
    #shetab-number{
        word-spacing: 10px;
        font-weight: 600;
    }
    #shetab-number p{
        font-size: 23pt;
    }
    #shetab-img{
        width:100%;
        display: flex;
        justify-content: flex-start;
    }
    img{
        width:40px;

        height: 30px;
    }
    #shetab p{
        color:black;

    }
    #cart{
        grid-area: cart;
        width:400px;
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        padding:10px;
        color:black;
    }
    #shetab{
        padding:10px;
        padding-top: 30px;
        border-radius: 20px;
        width: 100%;
        /*box-shadow: 8px 8px 8px rgb(42,25,41),-8px -8px 8px rgb(42,25,41);*/
        background: linear-gradient(to right,rgb(156,26,60),rgb(220,65,61));
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 400px) {
        #cart{
            padding-bottom: 20px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border:0;
        }
        #shetab-number p{
            font-size: 18pt;
        }
        #shetab-wrapper{
            width: 320px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #shetab{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin:auto;
        }
        #roshan{
            max-width: 400px;
        }
    }
</style>
