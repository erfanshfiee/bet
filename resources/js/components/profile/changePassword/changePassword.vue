<template>
    <div id="change-password">
        <p class="title">:تغییر کلمه عبور</p>
        <div id="change-password-wrapper" class="main-items">
            <form method="post" action="">

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
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "changePassword",
        mounted() {
            console.log(window.innerWidth)
            if(window.innerWidth>1301)
            {
                const style =document.querySelector("#shetab-wrapper").clientHeight
                document.getElementById('change-password-wrapper').style.height=style+'px'
            }
        }
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
        /*height: 250px;*/
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    #change-password{

        grid-area: change-password;
        padding: 10px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;
        /*height: 250px;*/
    }

    @media screen and (max-width: 599px) and (min-width: 320px) {
        #change-password{
            margin-top: 40px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-right: 0;
            padding:0;
            border-left: 0;
            width: 100%;
        }
        #change-password-wrapper{
            display: flex;
            padding: 0;
            padding-top: 10px;
            width: 100%;
            /*padding-left: 20px;*/
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }
        .inputs label{
            min-width:max-content;
            text-align: left;
            padding: 0;
            width: 100%;
        }
        form{
            /*width:100%;*/
        }
        .inputs{
            width:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #submit{
            margin-top:20px;
            display: flex;
            justify-content: center;
            padding-bottom:20px;
            width: 100%;
        }
    }
    @media screen and (max-width: 1360px) and (min-width: 600px) {
        #change-password{
            display: flex;
            /*justify-content: center;*/
            height: 100%;
            flex-direction: column;
            /*align-items: center;*/
            border-right: 0;
            padding:0;
            border-left: 0;
            width: 100%;
        }
        #change-password-wrapper{
            display: flex;
            padding: 0;
            padding-top: 10px;
            height: 100%;
            width: 100%;
            padding-left: 20px;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }
        .inputs label{
            min-width:max-content;
            width: 100%;
            text-align: left;
            padding: 0;
        }
        form{
            /*height: 100%;*/
            display: flex;
            flex-direction: column;
            flex-direction: column;
            align-items: center;
            width:100%;
        }
        .inputs{
            width:90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #submit{
            margin-top:20px;
            display: flex;
            justify-content: center;
            padding-bottom:20px;
            width: 100%;
        }
    }



    /*@media screen and (max-width: 1100px) and (min-width: 800px)*/
    /*{*/
    /*    #change-password{*/
    /*        !*min-height: 100%;*!*/
    /*        align-self: center;*/
    /*        min-height:437px;*/
    /*        max-height:437px;*/
    /*        padding-bottom: 5px;*/
    /*    }*/

    /*    #change-password-wrapper{*/
    /*        max-height: 373px;*/
    /*        min-height: 373px;*/
    /*    }*/
    /*    .inputs label{*/
    /*        min-width:100%;*/
    /*        text-align: left;*/
    /*        padding: 0;*/
    /*        display: flex;*/
    /*        justify-content: center;*/
    /*    }*/
    /*    form{*/
    /*        width:100%;*/
    /*    }*/
    /*    .inputs{*/
    /*        width:100%;*/
    /*        display: flex;*/
    /*        flex-direction: column;*/
    /*        justify-content: center;*/
    /*        align-items: center;*/
    /*    }*/
    /*    #submit{*/
    /*        margin-top:20px;*/

    /*    }*/


    /*}*/
</style>
