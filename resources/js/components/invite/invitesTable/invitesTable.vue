<template>
    <div id="invites-table" >
        <p class="title">:زیرمجموعه های شما</p>
        <div id="table" class="main-items">
            <table>
                <thead>
                    <tr>
                        <th>Usernaem</th>
                        <th>Date created</th>
                        <th>%30 commission</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Molly</td>
                        <td>12/12/2020</td>
                        <td class="commission">50,234</td>
                    </tr>
                    <tr>
                        <td>Molly</td>
                        <td>12/12/2020</td>
                        <td class="commission">50,234</td>
                    </tr>
                    <tr>
                        <td>Molly</td>
                        <td>12/12/2020</td>
                        <td class="commission">50,234</td>
                    </tr>
                    <tr>
                        <td>Molly</td>
                        <td>12/12/2020</td>
                        <td class="commission">50,234</td>
                    </tr>
                </tbody>
            </table>
            <div id="table-total">
                <p>Total:</p>
                <div id="table-total-form">
                    <p>54,88</p>
                    <form>
                        <button>
                            دریافت کمیسیون
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "invitesTable"
    }
</script>

<style scoped>
    #table-total-form{
        display: flex;
        margin-left: 260px;
    }
    #table-total-form p{
        margin-right: 10px;
    }
    #table-total-form button{
        background:rgb(223,149,120);
        border:0;
        border-radius: 30px;
        padding:5px 10px 5px 10px;
        text-align: center;
    }
    #table-total{
        margin-left: 500px;
        margin-bottom: 10px;
    }
    table tbody tr:nth-child(even)
    {
        background: rgb(19,32,40);
    }
    table tbody tr:nth-child(odd)
    {
        background: rgb(0,9,14);
    }
    tr{
        height: 30px;
        border-radius: 30px;
    }
    table tr td:first-child{
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
    table tr td:last-child{
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }

    table{
        border-collapse: separate;
        width:80%;
        border-spacing: 0 10px;
    }
    td,th{
        padding: 0px 100px 0px 100px;
    }
    #table{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:95%;
        align-items: center;
        margin-right: 30px;
        background: rgb(0,15,22);
        border-radius: 20px;
        text-align: center;
    }
    .title{
        font-size: 18pt;
    }
    #invites-table{
        width: 100%;
        margin:auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-bottom: 10px;
    }
    .commission{
        color:rgb(119,205,94)
    }
</style>
