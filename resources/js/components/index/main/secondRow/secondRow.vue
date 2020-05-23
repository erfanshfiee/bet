<template>
    <div id="secondRow">
        <next-toornament></next-toornament>
        <badbit-jacpot></badbit-jacpot>
        <rick-back></rick-back>
    </div>
</template>

<script>
    import nextToornament from "./nextToornament/nextToornament";
    import badbitJacpot from "./badbitJacpot/badbitJacpot";
    import rickBack from "./rickBack/rickBack";
    export default {
        name: "secondRow",
        components:{
            nextToornament,
            badbitJacpot,
            rickBack
        }
    }
</script>

<style scoped>
    #secondRow{
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-areas:
            'nextToornament nextToornament nextToornament nextToornament badbitJackpot badbitJackpot badbitJackpot badbitJackpot rickBack rickBack rickBack rickBack'
    ;
        padding-bottom: 5px;
        justify-items: center;
    }
    @media screen and (max-width: 650px) and (min-width: 320px) {
        #secondRow{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            justify-items: center;
            width: 100%;
            align-items: center;
            grid-template-areas:
                'nextToornament nextToornament'
                'badbitJackpot badbitJackpot'
                'rickBack rickBack'
        ;
        }

    }
    @media screen and (min-width: 651px) and (max-width: 999px){
        #secondRow{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            justify-items: center;
            width: 100%;
            margin-top:20px;
            align-items: stretch;
            grid-template-areas:
            'nextToornament nextToornament badbitJackpot badbitJackpot'
            ' rickBack rickBack rickBack rickBack'

        ;
        }


    }
    @media screen and (min-width: 1000px) and (max-width: 1300px) {
        #secondRow{
            display: grid;
            grid-template-columns: repeat(6,1fr);
            justify-items: center;
            width: 100%;
            margin-top:20px;
            align-items: stretch;
            grid-template-areas:
                'nextToornament nextToornament badbitJackpot badbitJackpot rickBack rickBack'
        ;
        }

    }
</style>
