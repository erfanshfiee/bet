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
        /*grid-column-gap: 50px;*/
        grid-template-columns: repeat(12,1fr);
        align-items: center;
        grid-template-areas:
            'newEx newEx newEx newEx newEx newEx newEx newEx profile  profile profile profile'
    ;
        justify-items: center;
    }
    @media screen and (max-width: 650px) and (min-width: 320px) {
        #firstRow{
            display: grid;
            grid-column-gap: 50px;
            grid-template-columns: repeat(2,1fr);
            justify-items: center;
            align-items: center;
            grid-template-areas:
            'newEx newEx'
            'profile profile'
        ;
        }

    }
    @media screen and (max-width: 999px) and (min-width: 651px) {
        #firstRow{
            display: grid;
            grid-column-gap: 50px;
            grid-template-columns: repeat(3,1fr);
            justify-items: center;
            align-items: center;
            grid-template-areas:
            'newEx newEx newEx'
            'profile profile profile'
        ;
        }
    }
    @media screen and (max-width: 1300px) and (min-width: 1000px) {
        #firstRow{
            display: grid;
            grid-column-gap: 50px;
            grid-template-columns: repeat(3,1fr);
            justify-items: center;
            align-items: center;
            grid-template-areas:
                'newEx newEx newEx'
                'profile profile profile'
        ;
        }
    }
</style>
