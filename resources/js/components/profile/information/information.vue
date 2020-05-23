<template>
    <div id="information">
        <p class="title">:جزئیات حساب کاربری</p>
        <div id="information-wrapper" class="main-items">
            <form action="">
                <div id="user-name" class="inputs">
                    <p>نام کاربری:</p>
                    <div class="user-information-text info">
                        <p id="user-name-text">jThePSY</p>
                    </div>
                </div>
                <div id="user-email" class="inputs">
                    <p>ادرس ایمیل:</p>
                    <div class="user-information-text info">
                        <p>example@gmail.com</p>
                    </div>
                </div>
                <div id="user-phone" class="inputs">
                    <p>شماره موبایل:</p>
                    <div class="user-information-text info">
                        <p>093315632458</p>
                    </div>
                </div>

                <div id="user-name-input" class="inputs">
                    <p>نام:</p>
                    <div class="user-information-text">
                        <input type="text" value="john smith">
                    </div>
                </div>

                <div id="user-image" class="inputs">
                    <p>اواتار:</p>
                    <div class="user-information-text">
                        <div id="file-peeker"></div>
                    </div>
                </div>

                <div id="user-submit" class="inputs">
                    <button type="submit">ثبت</button>
                </div>
            </form>



        </div>
    </div>
</template>

<script>
    export default {
        name: "information"
    }
</script>

<style scoped>
    #user-submit{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    #user-submit button{
        background: rgb(0,28,42);
        padding:5px 30px 5px 30px;
        border:0;
        border-radius: 20px;
    }
    #file-peeker{
        width:75px;
        height: 75px;
        border-radius: 20px;
        border-top:3px solid black;
        /*box-shadow: 8px 0px 5px ;*/
        background: rgb(0,16,24);
    }
    .title{
        padding:10px;
    }
    .user-information-text{
        display: flex;
        justify-content: flex-start;
        max-width:max-content;
    }
    .info{
        max-width: 90%;
    }
    #user-name-text{
        color: rgb(229,143,126);
        font-size: 18pt;
        font-weight: 600;
    }
    #information-wrapper{
        padding:10px;
    }
    input:focus{
        outline: none;
    }
    .inputs input{
        height: 30px;
        color:black;
        background: rgb(0,27,39);
        border:0;
        padding-left: 10px;
        border-radius: 20px;

    }
    .inputs p{
        padding-right: 30px;
        min-width: 143.02px;
        text-align: left;
        font-size:14pt;
    }
    .inputs p{
        font-size: 15pt;
    }
    .inputs{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    .title{
        padding:10px;
    }
    #information{
        grid-area: information;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        /*padding:10px;*/
        flex-direction: column;
    }
    @media screen and (max-width: 599px) and (min-width: 320px) {

        #information{
            width:100%;
            border-right: 0;
            padding:0;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-left: 0;
        }
        #user-submit{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
        #information-wrapper{
            width:100%;

        }
        .user-information-text{
            width: 300px;
            padding:0;
            margin:0;
        }
        .user-information-text input{
            width: 200px;
            border:0;
            padding-left:10px;
        }
        .inputs{
            width:100%;
            display: flex;
            margin:0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .inputs p{
            min-width: max-content;
            text-align: left;
            font-size:14pt;
            padding:0
        }
        p{
            max-width: max-content;
            padding: 0;
        }
        .info{
            display: flex;
            justify-content: center;
        }
        .info p{
            padding:0
        }
        #user-name-input .inputs{
            margin:0;
        }
    }



    @media screen and (max-width: 1300px) and (min-width: 600px) {

        #information{
            width:100%;
            border-right: 0;
            padding:0;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-left: 0;
        }
        #user-submit{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
        #information-wrapper{
            width:100%;

        }
        .user-information-text{
            width: 300px;
            padding:0;
            margin:0;
        }
        .user-information-text input{
            width: 200px;
            border:0;
            padding-left:10px;
        }
        .inputs{
            width:100%;
            display: flex;
            margin:0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .inputs p{
            min-width: max-content;
            text-align: left;
            font-size:14pt;
            padding:0
        }
        p{
            max-width: max-content;
            padding: 0;
        }
        .info{
            display: flex;
            justify-content: center;
        }
        .info p{
            padding:0
        }
        #user-name-input .inputs{
            margin:0;
        }
    }




    @media screen and (max-width: 1100px) and (min-width: 800px)
    {
        #information-wrapper{
            padding:10px;
            padding-right: 0;
            min-height: 100%;

        }
        #information{
            min-height: 100%;
            flex:1;
            padding:0
        }
    }
</style>
