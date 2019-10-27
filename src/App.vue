<template>
  <div id="app">
    <SideMenu></SideMenu>
    <router-view/>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue';

export default {
  components: {
    SideMenu
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
