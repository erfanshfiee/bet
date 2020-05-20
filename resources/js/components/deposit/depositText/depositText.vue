<template>
    <div id="cash-text">
        <div id="cash-text-wrapper">
            <button>تراکنش ها</button>
            <div>
                <h1>برداشت وجه</h1>
                <p id="cash-hint"><span>  توجه: </span>برداشت وجه فقط با روشی که شمه واریز انجام داده ای <br> امکان پدیر است</p>
            </div>
        </div>
        <p id="cash-out-ways">:روش های پرداخت</p>
    </div>
</template>

<script>
    export default {
        name: "depositText"
    }
</script>

<style scoped>
    #cash-text-wrapper{
        text-align: right;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    #cash-text{
        display: flex;
        width: 95%;
        flex-direction: column;
        align-items: flex-end;
        grid-area: cash-text;
        justify-content: flex-end;

    }
    span{
        color:rgb(230,196,135)
    }
    button{
        background: rgb(222,119,120);
        padding: 5px 30px 5px 30px;
        border: 0;
        border-radius: 20px;
    }
    #cash-out-ways{
        font-size: 20pt;
        font-weight: 600;
    }
</style>
