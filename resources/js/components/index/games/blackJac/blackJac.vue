<template>
    <div id="blackJac" class="game-items">
        <img class="games" src="images/BlackJack.png">
        <div class="game-name">
            <a href="#">بلک جک</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blackJac"
    }
</script>

<style scoped>
    a{
        background: rgb(0,0,0);
        padding:10px 20px 10px 20px;
        border-radius: 20px;
        min-width: 100%;
        text-decoration: none;
    }
    .game-items{
        min-width: max-content;
    }
    .game-name{
        min-width: 100%;
    }
</style>
