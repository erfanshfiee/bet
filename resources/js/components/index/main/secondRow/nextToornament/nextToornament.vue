<template>
    <div id="nextToornament" class="main-items">
        <div id="money-content">
            <p class="toornament">تورنومنت</p>
            <p class="toornament">بعدی</p>
            <p style="color: rgb(244,101,129);">FRIDAY MILLIONS NL Holdem</p>
            <p>تعداد شرکت کنندگان:20 نفر از 100</p>
            <p>ورودی:  100000</p>
            <div id="toornamentStart">
                <div id="time"><span>6</span>  <span>5</span> : <span>4</span>  <span>3</span> : <span>2</span> <span>1</span></div>
                <p id="startAt">شروع <br> : در</p>
            </div>
        </div>
        <div id="imgWrapper"><img id="money" src="images/money.png"/></div>
    </div>
</template>

<script>
    export default {
        name: "nextToornament"
    }
</script>

<style scoped>
    .toornament{
        font-weight: 700;
        font-size: 20pt;
    }
    #toornamentStart{
        display: flex;
    }
    #time{
        margin-top: 10px;
        padding:5px;
    }
    #money-content{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    span{
        background: rgb(1,0,6);
        padding:10px;
        border-radius: 8px;
    }
    #money{
        width:75px;
        height: 75px;
    }
    #nextToornament{
        display: flex;
        justify-content: center;
        padding: 0;
        max-width: 100%;
        min-width: 95%;
    }
    @media screen and (max-width: 650px) and (min-width: 320px) {
        #nextToornament{
            display: flex;
            margin-top: 10px;
            overflow: hidden;
            min-height: 350px;
            align-items: flex-start;
            justify-content: flex-end;
            max-width: 100%;
            min-width: 100%;
            padding:0;
            /*max-width: max-content;*/
        }
        #nextToornament .main-items{
            padding:0
        }
        #toornamentStart{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: max-content;
            max-width: 100%;
        }
        #toornamentStart #time{
            order:2;

        }
        #toornamentStart #startAt{
            order:1
        }

    }
    @media screen and (max-width: 650px) and (min-width: 320px) {
        #nextToornament{
            display: flex;
            margin-top: 10px;
            overflow: hidden;
            min-height: 350px;
            align-items: flex-start;
            justify-content: center;
            max-width: 100%;
            min-width: 100%;
            padding:0;
            /*max-width: max-content;*/
        }
        #nextToornament .main-items{
            padding:0
        }
        #toornamentStart{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: max-content;
            max-width: 100%;
        }
        #toornamentStart #time{
            order:2;

        }
        #toornamentStart #startAt{
            order:1
        }

    }
    @media screen and  (min-width: 651px) and (max-width: 999px){
        #nextToornament{
            display: flex;
            overflow: hidden;
            align-items: center;
            margin-top: 0;
            justify-content: center;
            max-width: 100%;
            min-width: 100%;
            padding:0;
        }
        #nextToornament .main-items{
            padding:0
        }
        #toornamentStart{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: max-content;
            max-width: 100%;
        }
        #toornamentStart #time{
            order:2;

        }
        #toornamentStart #startAt{
            order:1
        }

    }
    @media screen and  (min-width: 1000px) and (max-width: 1300px){
        #nextToornament{
            padding:0;
            max-width: 100%;
            min-width: 100%;
        }
        #toornamentStart{
            min-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        #toornamentStart div{
            order:2
        }
        #toornamentStart p{
            order:1;

        }

    }

</style>
