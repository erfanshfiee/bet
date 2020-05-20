<template>
    <div id="firstRow">
        <newEx></newEx>
        <profile></profile>
    </div>
</template>

<script>
    import newEx from "./newEx/newEx";
    import profile from "./profile/profile";
    export default {
        name: "firstRow",
        components:{
            newEx,
            profile
        }
    }
</script>

<style scoped>
    #firstRow{
        display: grid;
        grid-column-gap: 50px;
        grid-template-columns: repeat(12,1fr);
        justify-content: center;
        align-items: center;
        grid-template-areas:
            'newEx newEx newEx newEx newEx newEx newEx newEx profile  profile profile profile'
    ;
    }
</style>
