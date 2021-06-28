<template>
  <Page>
    <div class="home-form">
    
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  name: 'Home',
  components: {
    Page,
  }
}
</script>

<style scoped lang="scss">
.home-form{
  max-width:1400px;
  width:90%;
  height:90%;
  row-gap: 32px;
  box-shadow: 0px 6px 16px -8px rgba(0,0,0,0.59);

  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top:5%;
  left: 0;
  right: 0;

  background-color:white;
  border-radius: 15px;
}







</style>

