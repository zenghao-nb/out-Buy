<template>
    <div>
        <button @click="back">返回</button>
        <div>我是收藏页面</div>
        <img src="https://www.z4a.net/images/2020/04/27/hot.png" alt="">
        <a href="https://www.z4a.net/image/eYtbzP"><img src="https://www.z4a.net/images/2020/04/27/hot.png" alt="hot.png" border="0" /></a>
    </div>
</template>

<script>
    import tableBar from '../../components/zh/tableBar'
    export default {
        name: "shoucang",
        methods:{
            back(){
                this.$router.go(-1)
            }
        },
        comments:{
            tableBar
        },
        mounted() {
            console.log('我是收藏')
        }
    }
</script>

<style scoped>
    #nav{
        display: none;
    }

</style>