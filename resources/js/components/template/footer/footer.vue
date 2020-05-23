<template>
    <div id="footer">
        <p>&copy; Copyright Bellagio {{date}}</p>
    </div>
</template>

<script>
    export default {
        name: "myfooter",
        data()
        {
            return{
                date:null
            }
        },
        mounted() {
            const date=new Date()
            const year=date.getFullYear()
            this.date=year
        }
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
