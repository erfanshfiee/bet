<template>
    <div id="profile">
        <div id="page-desc"><h1 >پروفایل</h1></div>
        <div id="profile-wrapper">
            <information></information>
            <change-password></change-password>
            <cart></cart>
        </div>
    </div>
</template>

<script>
    import cart from "./cart/cart";
    import changePassword from "./changePassword/changePassword";
    import information from "./information/information";
    export default {
        name: "profile",
        components:{
            cart,
            information,
            changePassword
        }
    }
</script>

<style scoped>
    #page-desc{
        width: 90%;
        display: flex;
        justify-content: flex-end;
    }
    #profile{
        margin-top:20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        background: rgb(0,18,28);
    }
    #profile-wrapper{
        width:90%;
        display:grid;
        grid-template-columns: repeat(3,4fr);
        justify-content: center;
        justify-items: center;
        grid-template-areas:
        'information  change-password cart'
    ;
    }
    h1{
        font-size: 20pt;
        text-align: right;
    }
    @media screen and (max-width: 599px) and (min-width: 320px)
    {
        #profile-wrapper{
            max-width: 95%;
            justify-content: center;
            align-items: flex-start;
            justify-items: center;
            align-content: center;
            display:grid;
            grid-template-columns: repeat(3,1fr);
            grid-template-areas:
                'information information information'
                'change-password change-password change-password'
                'cart cart cart'
        ;

        }
    }
    @media screen and (max-width: 1300px) and (min-width: 600px)
    {
        #profile-wrapper{
            max-width: 95%;
            justify-content: center;
            align-items: start;
            justify-items: center;
            align-content: start;
            display:grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-areas:
                'information change-password'
                'cart cart'
        ;

        }
    }
</style>
