<template>
    <div id="roulette" class="game-items">
        <img class="games" src="images/roulette.png">
        <div class="game-name">
            <a href="#">رولت</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "roulette"
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
