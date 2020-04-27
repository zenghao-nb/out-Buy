<template>
  <div class="home">
    <Tablebar msg="Welcome to Your Vue.js App"/>
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

