<template>
    <div id="last-cash-out">
        <p>وضعیت اخرین برداشت</p>
        <div id="table" class="main-items">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Date & Time</th>
                        <th>Sheba Number</th>
                        <th>Card Number</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2512422</td>
                        <td>20,000</td>
                        <td>Card to Card</td>
                        <td>12/2/2020 13:45:55</td>
                        <td>3578451230256745852</td>
                        <td>6037997523542582</td>
                        <td><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lastCashOut"
    }
</script>

<style scoped>

    table tbody tr:nth-child(even)
    {
        background: rgb(19,32,40);
    }
    table tbody tr:nth-child(odd)
    {
        background: rgb(0,9,14);
    }
    tr{
        height: 20px;
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
        display: table-header-group;
        margin:auto;
        border-spacing: 0 5px;
    }
    td,th{
        padding: 0px 5px 0px 5px;
        font-size:12pt;
        max-width: max-content;
    }
    #table{
        padding:20px;
        width:100%;
        margin: auto;
        background: rgb(0,15,22);
        border-radius: 20px;
        text-align: center;
    }
    svg{
        width: 30px;
        height: 30px;

    }
    path{
        fill:rgb(156,64,67)
    }
    #last-cash-out{
        width:100%;
        max-width: max-content;
        display: flex;
        margin-right: 0;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        grid-area: last-cash-out;
    }
</style>
