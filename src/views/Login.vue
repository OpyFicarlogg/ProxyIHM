<template>
  <Page> 
    <LoginComp/>
  </Page>


</template>


<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import LoginComp from '@/components/login/LoginComp.vue'


export default {
  name: 'Login',
  components: {
    Page,
    LoginComp,
  }
}
</script>