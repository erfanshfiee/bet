<template>
    <div id="bit-coin">
        <p>:بیت کوین</p>
        <form action="">
            <div id="bit-coin-wrapper" class="main-items">
                <div id="bit-coin-amount" class="display">
                    <label for="bitCoinAmount">مبلغ</label>
                    <input id="bitCoinAmount" name="bitCoinAmount">
                </div>

                <div id="bit-coin-amount-dollars" class="display">
                    <label for="bitCoinAmountDollaDollars">مبلغ<br>(به دلار)</label>
                    <input id="bitCoinAmountDollaDollars" name="bitCoinAmountDollaDollars">
                </div>
                <div id="bit-coin-submit" class="display">
                    <button>ثبت</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "bitcoin"
    }
</script>

<style scoped>
    .display{
        margin-top:30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    label{
        font-size: 12pt;
        font-weight: 600;
        min-width: 70px;
    }
    #bit-coin-wrapper{
        text-align: right;
        display: flex;
        width: 100%;
        height: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:20px;
    }
    button{
        background: rgb(0,28,42);
        border:0;
        border-radius: 20px;
        padding:5px 30px 5px 30px;
    }
    #bit-coin{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    input{
        background: rgb(0,27,39);
        height: 30px;
        border-radius: 20px;
        width: 80%;
        border:0;
        margin-left: 30px;
    }
    #bit-coin{
        grid-area: bit-coin;
    }


    @media screen and (min-width: 320px) and (max-width: 580px) {
        #bit-coin{
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
            width: 100%;
        }
    }


    @media screen and (min-width: 581px) and (max-width: 880px) {
        #bit-coin{
            margin-left: auto;
        }
    }

</style>


