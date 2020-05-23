<template>
    <div id="cash-text">
        <div id="cash-text-wrapper">
            <button>تراکنش ها</button>
            <div>
                <h1>برداشت وجه</h1>
                <p id="cash-hint"><span>  توجه: </span>برداشت وجه فقط با روشی که شمه واریز انجام داده ای <br> امکان پذیر است</p>
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
    @media screen and (min-width: 320px) and (max-width: 650px){
        #cash-text-wrapper{
            display: flex;
            order:2;
            flex-direction: column;
        }
        #cash-text-wrapper button{
            order:2
        }
        #cash-text-wrapper div{
            order:1
        }
        #cash-out-ways{
            order:1
        }
        #cash-text{
            display: flex;
            flex-direction: column;
        }
        #cash-text-wrapper{
            display: flex;
            flex-direction: column;
        }
    }
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
    @media screen and (min-width: 320px) and (max-width: 650px){
        #cash-text-wrapper{
            display: flex;
            order:2;
            flex-direction: column;
        }
        #cash-text-wrapper button{
            order:2
        }
        #cash-text-wrapper div{
            order:1
        }
        #cash-out-ways{
            order:1
        }
        #cash-text{
            display: flex;
            flex-direction: column;
        }
        #cash-text-wrapper{
            display: flex;
            flex-direction: column;
        }
    }
</style>
