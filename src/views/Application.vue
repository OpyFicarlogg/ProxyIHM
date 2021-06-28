<template>
  <Page>
    <div class="container">
      <div class="search">
        <img class="search__image" src="@/assets/img/app/search.svg">
        <input type="text" class="search__input" name="" id="" placeholder="Recherche d'une application...">
      </div>
      <div class="app-form">
      
      </div>
    </div>
    
  </Page>
</template>

<script>
import Page from '@/components/Page.vue'

export default {
  name: 'Application',
  components: {
    Page,
  }
}
</script>

<style scoped lang="scss">

.container{
  position:absolute;
  width:100%;
  height:100%;
  top:0;

  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.search{
  position:relative;
  max-width:600px;
  width:50%;
  height:8%;
  box-shadow: 0px 6px 16px -8px rgba(0,0,0,0.59);
  margin-left: auto;
  margin-right: auto;
  background-color:white;
  border-radius: 0px 0px 55px 55px ;

  &__image{
    position:absolute;
    width:40px;
    transform: translate(17%, 80%);
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(189deg) brightness(49%) contrast(100%)
  }

  &__input{
    margin-top:25px;
    font-size:16px;
    height: 32px;
    width:80%;
    padding: 10px 0px 10px 60px;   
    background-color: white;
    border: 3px solid #ccc;

    
  }
}

.app-form{
  max-width:1400px;
  width:90%;
  height:85%;
  box-shadow: 0px 6px 16px -8px rgba(0,0,0,0.59);
  margin-left: auto;
  margin-right: auto;
  background-color:white;
  border-radius: 30px 30px 0px 0px  ;
}








</style>

