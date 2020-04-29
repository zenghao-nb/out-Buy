<template>

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="当前订单" name="first">
        <div class="his-order" v-on:click="news(index)"  v-for="(obj,index) in goodsList" :key="index">
            <div >
                <p  class="time"> 预计<span>12:20</span>到达 </p>
    <img alt="Vue logo" src="../../assets/1588037655561.jpeg" class="img">
            </div>
            <div class="chinese">
                <p>牛排顶韩国</p>
                <p>牛排顶韩国套餐</p>
                <p>$29</p>
                <p class="timer"><span>2020-4-23</span><span>12:00</span></p>
            </div>
            <div class="order">
                <div class="rem">取消</div>
                <div class="sure">催单</div>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="历史订单" name="second">
        <div class="his-order">
            <div >
                <p  class="time"> <span></span> 已完成2020-12-10</p>
    <img alt="Vue logo" src="../../assets/1588037650539.jpeg" class="img">
            </div>
            <div class="chinese">
                <p>牛排顶韩国</p>
                <p>牛排顶韩国套餐</p>
                <p>$29</p>
                <p class="timer"><span>2020-4-23</span><span>12:00</span></p>
            </div>
            <div class="order">
                <div class="rem">取消</div>
                <div class="sure">催单</div>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="退款" name="third">
        <div class="his-order">
            <div >
                <p  class="time">退款中</p>
    <img alt="Vue logo" src="../../assets/1588037633660.jpeg" class="img">
            </div>
            <div class="chinese">
                <p>牛排顶韩国</p>
                <p>牛排顶韩国套餐</p>
                <p>$29</p>
                <p class="timer"><span>2020-4-23</span><span>12:00</span></p>
            </div>
            <div class="order">
                <div class="rem">删除</div>
                <div class="sure">查看</div>
            </div>
        </div>
    </el-tab-pane>
  </el-tabs>

</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
      goodsList:[1,2,3,4,5]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    news(index){
      // console.log(index)
      this.$router.push({
        path: '/his',

      })
    }
  }
};
</script>
<style scoped lang="less">
.his-order {
  width: 500px;
  height: 170px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  background-color: #f2f2f2;
}
//左边
.time {
  color: #000;
  font-size: 12px;
  // margin-top: 40PX;
  margin-left: 10px;
}
.time > span {
  font-size: 15px;
}

.img {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border-radius: 50%;
  margin-left: 10px;
}
//中间盒子
.chinese {
  height: 200px;
  margin-top: 30px;
  margin-left: 10px;
}
.chinese > p {
  text-align: left;
  line-height: 10px;
  padding: 0;
}
.chinese > p:nth-child(1) {
  color: #000;
  font-size: 20px;
  font-weight: bold;
}
.chinese > p:nth-child(2) {
  color: #3a3a3a;
  font-size: 18px;
}
.chinese > p:nth-child(3) {
  color: red;
  font-size: 20px;
  font-weight: bold;
}
.chinese > p:nth-child(4) {
  color: #aaaaaa;
  font-size: 12px;
}

//右盒子
.order {
  margin-top: 130px;
  //  margin-left: 10px;
}

.his-order > div > .rem {
  width: 50px;
  height: 23px;
  border: 1px solid #a1a1a1;
  border-radius: 30px;
  display: inline-block;
}
.his-order > div > .sure {
  width: 50px;
  height: 23px;
  border: 1px solid #a1a1a1;
  border-radius: 30px;
  display: inline-block;
  margin-left: 5px;
}
</style>
