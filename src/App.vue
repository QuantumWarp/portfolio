<template>
  <div id="app">
    <SideMenu></SideMenu>
    <Home></Home>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import SideMenu from './components/SideMenu.vue';

export default {
  components: {
    Home,
    SideMenu,
  }
}
</script>

<style lang="scss">
html, body, #app {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
