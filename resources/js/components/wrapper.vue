<template>
    <transition name="fade" mode="out-in">
        <router-view class="router"></router-view>
    </transition>
</template>

<script>
    export default {
        name: "wrapper"
    }
</script>

<style scoped>
    .router{
        height: 100%;
    }
    .fade-enter-active{
        animation: slide-in 0.5s;
    }
    .fade-leave-active{
        animation: slide-out 0.5s;
    }
    @keyframes slide-out {
        from{
            transform: rotateY(0deg);
        }
        to{
            transform: rotateY(90deg);
        }
    }
    @keyframes slide-in {
        from{
            transform: rotateY(90deg);
        }
        to{
            transform: rotateY(0deg);
        }
    }
</style>
