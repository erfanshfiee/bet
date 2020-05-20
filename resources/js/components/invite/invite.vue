<template>
    <div id="invite">
        <div id="invite-container">
            <invite-text></invite-text>
        </div>
    </div>
</template>

<script>
    import inviteText from "./text/inviteText";
    export default {
        name: "invite",
        components:{
            inviteText
        }
    }
</script>

<style scoped>
    #invite{
        background: rgb(0,18,28);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #invite-container{
        width:85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

</style>
