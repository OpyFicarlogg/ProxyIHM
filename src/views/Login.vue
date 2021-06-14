<template>
  <div class="login">
    <h1>Login  Page</h1>

    <LoginComp/>
  </div>

</template>


<script>
// @ is an alias to /src
import LoginComp from '@/components/login/LoginComp.vue'

export default {
  name: 'Home',
  components: {
    LoginComp,
  }
}
</script>


<style scoped lang="scss">
.login{
  width:100%;
}
</style>