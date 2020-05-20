<template>
    <div id="navigation">
        <ul id="list">
            <router-link active-class="active" to="/" tag="li" exact><a>خانه</a></router-link>
            <li><a href="#">پوکر</a></li>
            <router-link to="/deposite" tag="li" active-class="active"><a>واریز وجه</a></router-link>
            <router-link active-class="active" to="/cashOut" tag="li"><a>برداشت وجه</a></router-link>
            <router-link active-class="active" to="/invite" tag="li"><a>دعوت دوستان</a></router-link>
            <router-link active-class="active" to="/profile" tag="li"><a>پروفایل</a></router-link>
            <li><a href="#">خروج</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        created() {
            console.log(this.$route.path)
        }
    }
</script>

<style scoped>
    li:active a {
        color:rgb(228,188,129)
    }

    li.active a {
        color:rgb(228,188,129);
    }
    #list{
        display: flex;
        flex-direction: row;
        color:white;
        justify-content: flex-end;

    }
    ul li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
        color:white;
        font-family: "BYekan",sans-serif;
        font-weight: 600;
        padding:10px;
    }
    #navigation{
        background: rgb(2,13,19);
        width: 100%;
    }
    #list{
        margin-right: 30px;
        padding:10px;
    }
    @media screen and (max-width: 500px) {
        #list{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top:30px;
        }
    }


</style>
