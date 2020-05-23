<template>
    <div id="cash-out">
        <div id="cash-out-wrapper">
            <deposit-text></deposit-text>
            <div id="el-wrapping">
                <woocher></woocher>
                <bit-coin></bit-coin>
                <cart-to-cart></cart-to-cart>
                <last-deposit></last-deposit>
            </div>
        </div>
    </div>
</template>

<style scoped>

    p{
        font-size: 20pt;
        font-weight: 500;
    }
    #cash-out{
        background: rgb(0,18,28);
        padding-bottom: 20px;
    }
    #cash-out-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /*justify-content: center;*/
        /*align-items: center;*/
    }


    #el-wrapping{
        display: grid;
        width: 90%;
        grid-template-columns: repeat(6,2fr);
        grid-template-areas:
            'cart-to-cart cart-to-cart bit-coin bit-coin woocher woocher'
            'cart-to-cart cart-to-cart last-cash-out last-cash-out last-cash-out last-cash-out'
    ;
        justify-items: center;
        align-content: center;
    }
    @media screen and (min-width: 320px) and (max-width: 580px){
        #cash-out{
            background: rgb(0,18,28);
            padding-bottom: 20px;
            width:100%;
        }
        #el-wrapping{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(1,1fr);
            grid-template-areas:
                'cart-to-cart'
                'bit-coin'
                'woocher'
                'last-cash-out'
        ;
            justify-items: center;
            align-content: center;

        }
    }
    @media screen and (min-width: 581px) and (max-width: 880px){
        #cash-out{
            background: rgb(0,18,28);
            padding-bottom: 20px;
            width:100%;
        }
        #el-wrapping{
            width: 100%;
            display: grid;
            column-gap: 0;
            grid-template-columns: repeat(2,1fr);
            grid-template-areas:
                'cart-to-cart cart-to-cart'
                'bit-coin woocher'
                'last-cash-out last-cash-out'
        ;
            justify-items: center;
            justify-content: center;

        }

    }




    @media screen and (min-width: 881px) and (max-width: 1365px){
        #cash-out{
            background: rgb(0,18,28);
            padding-bottom: 20px;
            width:100%;
        }
        #el-wrapping{
            width: 100%;
            display: grid;
            column-gap: 0;
            grid-template-columns: repeat(6,1fr);
            grid-template-areas:
                'cart-to-cart cart-to-cart bit-coin bit-coin woocher woocher'
                'last-cash-out last-cash-out last-cash-out last-cash-out last-cash-out last-cash-out'
        ;
            justify-items: center;
            justify-content: center;

        }
    }
</style>
<script>
    import bitcoin from "./bitcoin/bitcoin.vue";
    import woocher from "./woocher/woocher.vue";
    import cartToCart from "./cartToCart/cartToCart.vue";
    import lastDeposit from "./lastDeposit/lastDeposit";
    import depositText from "./depositText/depositText";
    export default {
        name: "deposite",
        components:{
            bitCoin:bitcoin,
            depositText,
            woocher,
            cartToCart,
            lastDeposit
        }
    }


</script>

