<template>
  <div class="page">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Page',
}
</script>

<style scoped lang="scss">
.page{
  width:100%;
  background-color:$second-grey;
  padding: 50px 0;
  position: relative;
}

.page::before{
  width:100%;
  height:45%;
  position:absolute;
  top:0px;
  left:0px;
  content:'';
  background-color:$second-color;
  /*transform: skew(0deg, 7deg);*/
  clip-path: polygon(0 0, 100% 0, 100% 100% , 0% calc(100% - 7vw));
  /*https://bennettfeely.com/clippy/ clip-path nice too*/
}

</style>