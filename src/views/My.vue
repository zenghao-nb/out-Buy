<template>
    <div class="">
        <div class="header">
            <div class="header-top">
                <div class="user-infor">
                    <img src="../assets/1.jpg" alt="">
                    <div>{{username}}</div>
                </div>
                <div class="shezhi">
                    <div>设置</div>
                    <div>客服</div>
                </div>
            </div>
            <div class="header-bottom">
                <div>
                    <i class="el-icon-star-off"></i>
                    <span>收藏</span>
                </div>
                <div>
                    <i class="el-icon-star-off"></i>
                    <span>评价</span>
                </div>
                <div>
                    <i class="el-icon-star-off"></i>
                    <span> 红包</span>
                </div>
            </div>
        </div>
        <div class="main">
            <div >常用功能</div>
            <div class="choice">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div class="chocie2">
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>

        </div>
    </div>


</template>

<script>
    export default {
        name: "my",
        data() {
            return {
                username: '用户名'
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
    .main{
        width: 90%;
        margin: 0 auto;
        border: 1px solid black;
        border-radius: 5px;
        &>h4{
            margin-left: 0;
        }
        &>.choice{
            margin-left: 12px;
            display:flex;
            flex-wrap: wrap;
            justify-content: start;
            &>div{
                width: 50px;
                height:50px;
                margin-right: 15px;
                margin-left: 12px;
                margin-bottom: 20px;
                border: 1px solid black;
            }
        }
        &>.chocie2{
            margin-left: 12px;
            display:flex;
            flex-wrap: wrap;
            justify-content: start;
            &>div{
                width: 50px;
                height:50px;
                margin-right: 15px;
                margin-left: 12px;
                margin-bottom: 20px;
                border: 1px solid black;
            }
        }

    }
</style>