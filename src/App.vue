<template>

  <div class="nav">
      <div class="nav__img">
        <img alt="Vue logo" class="nav__img" src="./assets/logo.png">
      </div>
      
      <router-link class="nav__elem" to="/">
        <img alt="Vue logo" class="svg-green" src="./assets/home.svg">
        <span>Home</span>
      </router-link>
      <router-link class="nav__elem" to="/about">
        <img alt="Vue logo" class="svg-green" src="./assets/file-person.svg">
        <span>About</span>
      </router-link>
      <div class="nav__end">
        <img alt="Vue logo" class="svg-green" src="./assets/logout.svg">
      </div>
    </div>
    <router-view/>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display:flex;
}

body {
  margin: 0;
}

.nav {
  /*padding: 0px 15px 0px 15px;*/
  height: 100vh;
  width:40px;
  background-color: rgb(4, 22, 2);

  /*display:grid;
  grid-template-rows: 70px 1fr 1fr;*/

  display:flex;
  flex-direction:column;
  transition:  0.5s ease-in-out;

  &:hover{
    padding: 0px 25px 0px 25px;
    width:50px;
    
  }

  &:hover .nav__elem > span{
    display:block;
  }
  

  &__img{
    flex-grow:6;
    align-self:center;
    
    & img {
      padding-top:20px;
      width:80%; 
      height:auto;
    }
  }
  &__elem{
    flex-grow:1;
    align-self:center;
    justify-self:flex-end;
    width:100%;
    
    & span{
      display: none;
    }
    & img{
      width:80%; height:auto;
      transition: width 0.5s ease-in-out;

      &:hover{
        width:100%;
        height:auto;
        
      }
    }
      
  }

  &__end{
    flex-grow:7;
    align-self:center;
    padding: 10px 10px;
    display:flex;
    flex-flow: row wrap;
    align-content:flex-end;

    & img {
      margin-bottom:50px;
      width: 30px;
      height:30px;
    }

    
  }

  a {
    font-weight: bold;
    color: #42b983;
    text-decoration: none;
    font-weight: 500;

    &.router-link-exact-active {
      color: #edf8e6;
      font-weight: 700;
      text-decoration:none; 
      cursor:pointer; 
    }
  }
}

.svg-green{
  /* https://codepen.io/sosuke/pen/Pjoqqp*/
  filter: invert(70%) sepia(12%) saturate(1800%) hue-rotate(101deg) brightness(87%) contrast(87%);
}




</style>
