<template>
    <div id="change-password">
        <p class="title">:تغییر کلمه عبور</p>
        <form method="post" action="">
            <div id="change-password-wrapper" class="main-items">

                    <div id="current-password" class="inputs">
                        <label for="cur-pass">کلمه عبور فعلی:</label>
                        <input type="password" id="cur-pass" name="current-password">
                    </div>
                    <div id="new-password" class="inputs">
                        <label for="new-pass">کلمه عبور جدید:</label>
                        <input type="password" id="new-pass" name="current-password">
                    </div>
                    <div id="repeat-new-password" class="inputs">
                        <label for="repeat-new-pass">تکرار کلمه عبور جدید:</label>
                        <input type="password" id="repeat-new-pass" name="current-password">
                    </div>
                    <div id="submit">
                        <button type="submit">ثبت</button>
                    </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "changePassword"
    }
</script>

<style scoped>
    .title{
        padding:10px;
    }
    #submit{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #submit button{
        background: rgb(0,28,42);
        padding:5px 30px 5px 30px;
        border:0;
        font-size:15pt;
        border-radius: 20px;
        color:white
    }
    #repeat-new-password{
        margin-top:5px;
    }
    #repeat-new-password input{
        margin-right: 5px;
    }
    #new-password{
        margin-top:10px;
    }
    input:focus{
        outline: none;
    }
    .inputs input{
        height: 30px;
        color:black;
        background: rgb(0,27,39);
        border:0;
        padding:5px;
        border-radius: 20px;

    }
    .inputs label{
        padding-right: 30px;
        max-width: 143.02px;
        text-align: left;
        font-size:14pt;
    }
    .inputs{
        display: flex;
        justify-content: center;
        align-items: center;

    }
    #change-password-wrapper{
        padding:10px;
        height: 250px;
    }
    #change-password{
        grid-area: change-password;
        padding: 10px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;
    }

    @media screen and (max-width: 400px) {
        #change-password{
            width:100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-right: 0;
            padding:0;
            border-left: 0;
        }
        #change-password-wrapper{
            display: flex;
            padding: 0;
            padding-left: 20px;
            width: 320px;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 280px;
        }
        .inputs label{
            max-width:100%;
            margin-left: 20px;
            text-align: left;
        }
        .inputs{
            width:320px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
        #submit{
            margin-top:20px;
        }
    }
</style>
