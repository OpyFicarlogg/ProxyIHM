<template>
 <div class="login-form">
   <img alt="Vue logo" class="login-form__img" src="@/assets/img/logo.png">
   <input type="text" :class="usrClass" placeholder="Username or E-mail" v-model="usr" @input="validateEmail()">
   <input type="password" class="input-main" placeholder="Password">
   <label class="input-checkbox">
      <input type="checkbox" style="background-color:green;"> 
      <div class="input-checkbox__check"></div>
      <span>Mémoriser les informations de connexion</span>
    </label>
   <button class="btn-main">Login</button>
   <div class="login-form__pwd"><a href="">Mot de passe oublié</a></div>
 </div>
</template>

<script>
export default {
  name: 'LoginComp',
  props: {

  },
  data(){
    return{
      usr:"",
      usrClass:"input-main",
    }
  },
  methods:{
    validateEmail(){
      const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if(this.usr =="" || this.usr.indexOf("@") == -1|| regMail.test(String(this.usr).toLowerCase())){
        this.usrClass="input-main";
      }
      else{
        this.usrClass="input-main--error";
      }
    }
  }

}
</script>

<style scoped lang="scss">
@import "@/assets/css/Composants/_buttons.scss";
@import "@/assets/css/Composants/_inputs.scss";

.login-form{
  max-width:600px;
  min-width:200px;
  width:60%;
  display:grid;
  row-gap: 32px;
  box-shadow: 0px 6px 16px -8px rgba(0,0,0,0.59);

  /*https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/*/
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color:white;
  border-radius: 15px;
  padding: 32px 32px 32px 32px;

  &__img{
    margin: auto;
    max-width:200px;
    min-width:60px;
    width:20vw;
  }

  &__pwd{
    cursor: pointer;
      
    & a {
      text-decoration: none;
      color: $main-color ;
    }
  }
}

</style>
