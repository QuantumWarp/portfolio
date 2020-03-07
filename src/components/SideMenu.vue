<template>
  <div class="side-menu">
    <div class="top">
      <img src="../assets/logo.svg"> 
    </div>

    <div class="list">
      <SideMenuItem page-link="home">Home</SideMenuItem>
      <SideMenuItem page-link="about-me">About</SideMenuItem>
      <SideMenuItem page-link="apps-and-services">Apps</SideMenuItem>
      <SideMenuItem page-link="history">History</SideMenuItem>
      <SideMenuItem page-link="contact-me">Contact</SideMenuItem>
    </div>

    <div class="social-links"></div>
  </div>
</template>

<script>
import SideMenuItem from './controls/SideMenuItem.vue';

export default {
  components: {
    SideMenuItem
  },
}
</script>

<style scoped>
.side-menu {
  text-transform: uppercase;
  min-width: 300px;
  color: rgb(240, 240, 240);
  height: 100%;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.side-menu .top {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid grey;
}
.side-menu .top img {
  height: 120px;
}
.side-menu .list {
  margin-top: 6vh;
  flex-direction: column;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 1200px) {
  .side-menu {
    display: none;
  }
}
</style>
