<template>
  <div class="home">  
     <div class="Header">
         <!-- <ul class="head-ses">
             <li> 预计<span>12：20</span>送到 </li>
              <li>骑手正在送餐中，请等候！</li>
         </ul>
         <ul class="head-box">
             <li>联系商家</li>
             <li>联系骑手</li>
             <li>再来一单</li>
         </ul> -->
         <img src="../../assets/qure.png" alt="" class="img">
     </div>
     <div class="map">

     </div>
     <div class="">
         <div>
            <el-carousel height="200px" direction="horizontal" :autoplay="false">
                <el-carousel-item v-for="item in 3" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
            </el-carousel>
         </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
* {
  list-style: none;
}
.img {
  width: 100%;
  height: 200px;
}
//订单完成
.Header {
  width: 100%;
  height: 200px;
  //   background-color: aquamarine;
  border: 1px solid red;
}
//成功
.head-ses {
  text-align: center;
}
//三个一
.head-box {
  margin: 0 auto;
}
.head-box > li {
  width: 292rpx;
  height: 84rpx;
  background-color: pink;
  float: left;
  text-align: center;
}
.head-box > li:nth-child(1) {
  background-color: red;
}

//地图
.map {
  width: 100%;
  height: 200px;
  background-color: bisque;
}
</style>

