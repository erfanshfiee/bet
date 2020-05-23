<template>
    <div id="cart-to-cart">
        <p>:کارت به کارت</p>
        <form action="">
            <div id="cart-to-cart-wrapper" class="main-items">
                <div id="describe">
                    <p>لطفا شماره کارت و شبای خود را مجددا بررسی نمیایید.در* صورتی که اطلاعات نادرست وارد کردید لطفا با پشتیبانی در  ارتباط باشید</p>
                </div>
                <div id="cart-to-cart-cart-number" class="display">
                    <label for="CartNumber">:شماره کارت</label>
                    <input type="text" id="CartNumber" name="cartNumber">
                </div>
                <div id="cart-to-cart-sheba-number" class="display">
                    <label for="shebaNumber">شماره شبا:</label>
                    <input type="text" id="shebaNumber" name="shebaNumber">
                </div>
                <div id="cart-to-cart-cart-owner" class="display">
                    <label for="CartOwner">نام صاحب کارت</label>
                    <input type="text" id="CartOwner" name="CartOwner">
                </div>
                <div id="cart-to-cart-amount" class="display">
                    <label for="amount">مبلغ</label>
                    <input type="text" id="amount" name="amount">
                </div>
                <div id="cart-to-cart-submit" class="display">
                    <button>ثبت</button>
                </div>

            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "cartToCart"
    }
</script>

<style scoped>
    #CartOwner,#amount{
        width:180px;
    }
    .display{
        margin-top:30px;
        width:100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    input{
        background: rgb(0,27,39);
        height: 30px;
        border-radius: 20px;
        width: 80%;
        border:0;
        /*margin-left: 30px;*/
    }
    button{
        margin: auto;
    }
    #cart-to-cart{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    #describe{
        text-align: right;
    }
    button{
        background: rgb(0,28,42);
        border:0;
        border-radius: 20px;
        padding:5px 30px 5px 30px;
    }
    label{
        font-size: 12pt;
        font-weight: 600;
        min-width:130px;
    }
    #cart-to-cart-wrapper
    {
        padding:20px;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #cart-to-cart{
        grid-area: cart-to-cart;
    }
    @media screen and (min-width: 320px) and (max-width: 580px) {
        #cart-to-cart{
            width: 100%;
            display: flex;
            justify-content: flex-start;
        }
        #cart-to-cart-wrapper{
            min-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #describe{
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


    @media screen and (min-width: 881px) and (max-width: 1365px){
        #cart-to-cart-wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .display{
            display: flex;
            width: 100%;
            flex-direction: column;
        }
        label{
            display: flex;
            justify-content: center;
        }
    }
</style>
