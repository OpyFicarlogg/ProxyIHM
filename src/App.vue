<template>

  <div class="nav">
      <div class="nav__img">
        <img alt="Vue logo" class="nav__img" src="@/assets/img/logo.png">
      </div>
      
      <router-link class="nav__elem" to="/">
        <img alt="Vue logo" class="svg-green" src="@/assets/img/menu/home.svg">
        <span>Home</span>
      </router-link>
      <router-link class="nav__elem" to="/about">
        <img alt="Vue logo" class="svg-green" src="@/assets/img/menu/file-person.svg">
        <span>About</span>
      </router-link>
      <router-link class="nav__elem" to="/login">
        <img alt="Vue logo" class="svg-green" src="@/assets/img/menu/file-person.svg">
        <span>Login</span>
      </router-link>
      <div class="nav__end">
        <img alt="Vue logo" class="svg-green" src="@/assets/img/menu/logout.svg">
      </div>
    </div>
    <router-view/>
</template>


<style lang="scss">
@import "@/assets/css/Base/_base.scss";
@import "@/assets/css/Base/_typography.scss";
</style>

<style scoped lang="scss">
  @import "@/assets/css/Layout/_nav.scss";
</style>
