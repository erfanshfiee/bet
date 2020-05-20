<template>
    <div id="index-wrapper">
        <firstRow></firstRow>
        <second-row></second-row>
    </div>
</template>

<script>
    import firstRow from "./firstRow/firstRow";
    import secondRow from "./secondRow/secondRow";
    export default {
        name: "wrapper",
        components:{
            firstRow,
            secondRow
        }
    }
</script>

<style scoped>
    #index-wrapper{
        background: rgb(0,16,24);
        /*display: grid;*/
        /*grid-template-columns: repeat(12,1fr);*/
    }
</style>
