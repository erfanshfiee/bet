<template>
    <div id="text">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" class="svg-inline--fa fa-bullhorn fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path></svg>
        <div id="my-text">
<!--            <transition-group name="fade" tag="div">-->
<!--                <a class="news" href="#" v-for="(d,i) in data" :key="d">{{d}}</a>-->
<!--            </transition-group>-->
            <marquee-text id="marq" :duration="60">
                <div class="news-wrap">

                    <a class="news" href="#" v-for="d in data"> &nbsp; &nbsp; {{d}} &nbsp; &nbsp; </a>

                </div>
            </marquee-text>
        </div>
    </div>
</template>

<script>
    import MarqueeText from "vue-marquee-text-component"
    export default {
        name: "customeText",
        components: {
            MarqueeText
        },
        data()
        {
            return{
                show:[],
                data:[
                    "تست شماره یک",
                    "تست شماره دو",
                    'تست شماره سه',
                    'تست شماره چهار',
                    'تست شماره پنج',
                    'تست شماره شیش',
                    'تست شماره هفت',
                    'تست شماره هشت',
                ]
            }
        },
        mounted() {
            // const news=document.querySelectorAll(".news")
            // for(let i=0;i<news.length;i++)
            // {
            //     if(i===0)
            //     {
            //         this.show[i]=true
            //     }else{
            //         this.show[i]=false
            //     }
            // }
            // this.destroy()

        },
        created() {
            // setInterval(()=>
            // {
            //     let removed = this.show.pop();
            //     this.show.unshift(removed);
            //     let index=this.show.findIndex(val=>val==true)
            //     this.destroy()
            // },5000)
        },
        methods:{
            destroy(){
                const news=document.querySelectorAll(".news")
                for(let i=0;i<news.length;i++)
                {
                    const show=this.show[i]
                    if(show){
                        news[i].style.display="inline"
                    }else
                    {
                        news[i].style.display="none"
                    }

                }
            }
        }
    }
</script>

<style scoped>
    .spani{
        width:50px;
        height: 1px;
        display: inline;
        display: inline;
    }
    #text{
        width:100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    #my-text{
        background: rgb(2,13,19);
        margin-top: 10px;
        width:90%;
        border-radius: 20px;
        display: flex;
        justify-content: flex-end;
        padding:5px;
        padding-right:15px;

    }
    path{
        fill: rgb(232,195,142);
    }
    svg{
        width: 30px;
        margin-right: -30px;
        height: 30px;
    }
    @media screen and (max-width: 800px) {
        svg{
            order:2
        }
        #my-text{
            order:1;
            text-align: right;
        }
        #text{
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            width: 100%;
        }
    }
    a:hover{
        color:rgb(232,195,142);
    }
    /*#my-text{*/
    /*    transform: rotateY(180deg);*/
    /*}*/
    /*.news-wrap a{*/
    /*    display: inline;*/
    /*    -webkit-transform:rotate(10deg);*/
    /*    -moz-transform:rotate(10deg);*/
    /*    -o-transform:rotate(10deg);*/
    /*}*/
    .news{
        text-decoration: none;
    }
</style>

