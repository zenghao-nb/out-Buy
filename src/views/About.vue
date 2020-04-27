<template>

  <div class="about">
    <h1>This is an about page</h1>

    <div>sdfjklsj</div>

    <el-alert
            title="成功提示的文案"
            type="success">
    </el-alert>
    <el-alert
            title="消息提示的文案"
            type="info">
    </el-alert>
    <el-alert
            title="警告提示的文案"
            type="warning">
    </el-alert>
    <el-alert
            title="错误提示的文案"
            type="error">
    </el-alert>
>>>>>>> zh-branch
=======
  <div class="home">
    <Tablebar msg="Welcome to Your Vue.js App"/>
>>>>>>> mxm-branch
  </div>
</template>

<script>
// @ is an alias to /src
import Tablebar from '@/components/About/Tablebar.vue'

export default {
  name: 'Home',
  components: {
    Tablebar
  }
}
</script>

