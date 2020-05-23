<template>
    <div id="main-games">
        <div id="all-games">
            <videoPoker></videoPoker>
            <roulette></roulette>
            <poker></poker>
            <blackJac></blackJac>
        </div>

    </div>
</template>

<script>
    import roulette from "../roulette/roulette";
    import videoPoker from "../videoPoker/videoPoker";
    import poker from "../poker/poker";
    import blackJac from "../blackJac/blackJac";
    export default {
        name: "mainGames",
        components:{
            roulette,
            videoPoker,
            poker,
            blackJac
        }
    }
</script>

<style scoped>
    #main-games{
        max-height: max-content;
        max-width: max-content;
        background: rgb(1,10,15);
        background: linear-gradient(to bottom,rgb(0,18,28),rgb(1,10,15));
        margin: auto;
        margin-top:30px;
        border-radius: 30px;
    }
    #all-games{
        display: flex;
        justify-content: center;
        padding:20px 100px 20px 100px;
        align-items: center;
        max-width: max-content;
    }
    @media screen and (max-width: 650px) and (min-width: 320px){
        #all-games{
            display: flex;
            flex-direction: column;
        }
        #main-games{
            min-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #all-games{
            display: flex;
            justify-content: center;
            padding:0;
            align-items: center;
            max-width: max-content;
        }
    }

</style>

