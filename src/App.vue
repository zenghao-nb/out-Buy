<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/my">我的</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less" >
  @font:14px;
  @color:yellow;
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
  padding: 30px;
  position: fixed;
  left: 0;
 bottom:0px;
  width: 100%;
  font-size: @font;
  background-color: @color;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
