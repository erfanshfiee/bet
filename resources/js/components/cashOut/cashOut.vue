<template>
    <div id="cash-out">
        <div id="cash-out-wrapper">
            <cash-text></cash-text>
            <div id="el-wrapping">
                <woocher></woocher>
                <bit-coin></bit-coin>
                <cart-to-cart></cart-to-cart>
                <last-cash-out></last-cash-out>
            </div>
        </div>
    </div>
</template>

<script>
    import cashText from "./cashText/cashText";
    import woocher from "./woocher/woocher";
    import bitCoin from "./bitCoin/bitCoin";
    import cartToCart from "./cartToCart/cartToCart";
    import lastCashOut from "./lastCashOut/lastCashOut";
    export default {
        name: "cashOut",
        components:{
            cashText,
            woocher,
            bitCoin,
            cartToCart,
            lastCashOut
        }
    }
</script>

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
        width: 95%;
        grid-template-columns: repeat(6,2fr);
        grid-template-areas:
            'cart-to-cart cart-to-cart bit-coin bit-coin woocher woocher'
            'cart-to-cart cart-to-cart last-cash-out last-cash-out last-cash-out last-cash-out'
    ;
        justify-items: center;
        align-content: center;
    }

</style>
