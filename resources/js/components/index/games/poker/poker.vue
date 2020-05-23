<template>
    <div id="poker" class="game-items">
        <img class="games" src="images/Poker.png">
        <div class="game-name">
            <a href="#">پوکر</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "poker"
    }
</script>

<style scoped>
    a{
        background: rgb(0,0,0);
        padding:10px 20px 10px 20px;
        border-radius: 20px;
        text-decoration: none;

    }
    .game-items{
        min-width: max-content;
    }
</style>
