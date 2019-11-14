<template>
  <div class="side-menu">
    <div class="top">
      ICON
    </div>

    <div class="list">
      <SideMenuItem page-link="home">Home</SideMenuItem>
      <SideMenuItem page-link="about-me">About</SideMenuItem>
      <SideMenuItem page-link="apps-and-services">Apps</SideMenuItem>
      <SideMenuItem page-link="history">History</SideMenuItem>
      <SideMenuItem page-link="contact-me">Contact</SideMenuItem>
    </div>
  </div>
</template>

<script>
import SideMenuItem from './controls/SideMenuItem.vue';

export default {
  components: {
    SideMenuItem
  }
}
</script>

<style scoped>
.side-menu {
  width: 350px;
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
}

.side-menu .list {
  flex: 4;
  flex-direction: column;
  display: flex;
  align-items: center;
}
</style>
