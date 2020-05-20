<template>
    <div>
        <main-games></main-games>
        <wrapper></wrapper>
    </div>
</template>

<script>
    import mainGames from "./games/main/mainGames";
    import wrapper from "./main/wrapper";
    export default {
        name: "index",
        components:{
            mainGames,
            wrapper
        }
    }
</script>

<style scoped>

</style>
