<template>
    <div id="invite">
        <div id="invite-container">
            <invite-text></invite-text>
            <invites-table></invites-table>
        </div>
    </div>
</template>

<script>
    import inviteText from "./text/inviteText";
    import invitesTable from "./invitesTable/invitesTable";
    export default {
        name: "invite",
        components:{
            inviteText,
            invitesTable

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
    @media screen and (min-width:320px ) and (max-width: 480px) {
        #invite-container{
            width:100%;
            padding:5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

    }

</style>
