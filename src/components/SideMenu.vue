<template>
  <div class="side-menu">
    <div class="top">
      <v-icon name="balance-scale" scale="10"/>
    </div>

    <div class="list">
      <SideMenuItem page-link="home">Home</SideMenuItem>
      <SideMenuItem page-link="about-me" previous-page-link="home">About</SideMenuItem>
      <SideMenuItem page-link="apps-and-services" previous-page-link="about-me">Apps</SideMenuItem>
      <SideMenuItem page-link="history" previous-page-link="apps-and-services">History</SideMenuItem>
      <SideMenuItem page-link="contact-me" previous-page-link="history">Contact</SideMenuItem>
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
  min-width: 300px;
  color: grey;
  height: 100%;
  background-color: rgb(0, 0, 64);
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.side-menu .top {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid grey;
}
.side-menu .list {
  flex: 6;
  margin-top: 10vh;
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
