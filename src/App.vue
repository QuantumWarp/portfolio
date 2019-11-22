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
:root {
  --color-primary: #070B5A;
  --color-secondary: #E0871F;
}
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
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}
@media screen and (min-width: 992px) {
  .column {
    flex: 1
  }
}
</style>
