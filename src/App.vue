<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/about">
        <i class="el-icon-s-home"></i>
        <span>订单</span>
        </router-link>
      <router-link to="/my">
        <i class="el-icon-s-home"></i>
        <span>我的</span>
      </router-link>
    </div>
<!--      <tableBar></tableBar>-->
    <router-view/>
  </div>
</template>
<script>
    // import tableBar from './components/zh/table-bar'
    // components:{
    //     tableBar
    // }
</script>
<style lang="less" >
  @font:20px;
  @color: #ffe32b;
  @screenHeight:60px;
  @a:pink
  *{
    margin: 0;
    padding: 0;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*position: relative;*/
}
#nav {
  height: @screenHeight;
  max-width: 750px;
  min-width: 320px;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  font-size: @font;
  background-color: @color;
  z-index: 5;
  display: flex;
  justify-content: space-around;

  a {
    margin: 10px 0;
    text-decoration: none;
    font-weight: bold;
    color: #567264;
    display: flex;
    flex-direction: column;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
