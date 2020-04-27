<template>
</template>

<script>
    export default {
        name: "my-header",
        data(){
            return{
                username:'我是用户'
            }
        }
    }
</script>

<style scoped lang="less">
    .header-top {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .user-infor {
        display: flex;
        margin: auto 20px;

    div:nth-child(2) {
        margin: auto 10px;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    }
    .shezhi {
        display: flex;
        margin: 20px 20px;

    div:first-child {
        margin-right: 20px;
    }
    }

    .header-bottom {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
    &>div{
         display: flex;
         flex-direction: column;
     }
    }
</style>