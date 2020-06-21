<template>
  <div id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
//设置rem自适应字体大小
document.addEventListener('DOMContentLoaded',()=> {
  const html = document.querySelector('html');
  //1rem 就等于屏幕宽度除以10
  let fontSize = window.innerWidth / 10;
  //最大为50px
  fontSize = fontSize > 50? 50 : fontSize;
  html.style.fontSize = fontSize + 'px';
})
import tabbar from './components/common/tabbar';
export default {
   components:{
     tabbar,
   }
}
</script>
<style scoped lang="scss">
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #7d8188;
}
</style>>

