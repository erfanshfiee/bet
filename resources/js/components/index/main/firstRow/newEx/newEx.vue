<template>
    <div id="newEx">
        <img id="newExImg" src="/images/new-ex.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "newEx"
    }
</script>

<style scoped>
    img{
        padding:0;
        max-width: 100%;
        min-width: 100%;
        height: 100%;
        image-rendering: crisp-edges;
    }
    #newEx{
        justify-self: center;
        border-radius: 12px;
        border:3px solid rgb(1,12,18);
        width: 97%;
        height: 200px;
    }
</style>
