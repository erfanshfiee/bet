<template>
    <div id="video-poker" class="game-items">
        <img class="games" src="images/VideoPoker.png">
        <div class="game-name">
            <a href="#">ویدیو پوکر</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "videoPoker"
    }
</script>

<style scoped>
    a{
        background: rgb(0,0,0);
        padding:10px 20px 10px 20px;
        border-radius: 20px;
        text-decoration: none;
        width: 100%;
    }
    .game-name{
        width:100%
    }
    .game-items{
        min-width: max-content;
    }

</style>
