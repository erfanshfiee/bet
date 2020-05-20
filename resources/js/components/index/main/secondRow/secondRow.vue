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
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-areas:
            'nextToornament nextToornament nextToornament nextToornament badbitJackpot badbitJackpot badbitJackpot badbitJackpot rickBack rickBack rickBack rickBack'
    ;
        padding-bottom: 5px;
        justify-items: center;
    }
</style>
