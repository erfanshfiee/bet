<template>
    <div id="footer">
        <p>&copy; Copyright Bellagio 2020</p>
    </div>
</template>

<script>
    export default {
        name: "myfooter"
    }
</script>

<style scoped>
    #footer{
        background: rgb(0,9,14);
        position:absolute;
        bottom:0;
        width:100%;
        display: flex;
        justify-content: center;
        height:30px;
    }
    p{
        padding:10px;
        left:auto;
        font-size:10pt;
    }
</style>
