<template>
  <div class="home">
    <img alt="Vue logo" class="filter-green" src="../assets/home.svg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}
</script>

<style scoped lang="scss">
.home{
  width:100%;
}




</style>

