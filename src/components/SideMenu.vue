<template>
  <div class="side-menu">
    <div class="top">
      <v-icon name="balance-scale" scale="10"/>
    </div>

    <div class="list">
      <SideMenuItem
        page-link="home"
        :selected="selectedPageLink === 'home'"
      >Home</SideMenuItem>

      <SideMenuItem
        page-link="about-me"
        :selected="selectedPageLink === 'about-me'"
      >About</SideMenuItem>

      <SideMenuItem
        page-link="apps-and-services"
        :selected="selectedPageLink === 'apps-and-services'"
      >Apps</SideMenuItem>

      <SideMenuItem
        page-link="history"
        :selected="selectedPageLink === 'history'"
      >History</SideMenuItem>

      <SideMenuItem
        page-link="contact-me"
        :selected="selectedPageLink === 'contact-me'"
      >Contact</SideMenuItem>
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
  data: () => ({
    selectedPageLink: 'home'
  }),
  methods: {
    checkIsActive(elem, previousElem) {
      const elemRect = elem.getBoundingClientRect();
      const elemCenter = elemRect.top + elemRect.height / 2;

      if (!previousElem) {
        this.isActive = elemCenter >= 0;
        return;
      }

      const previousElemRect = previousElem.getBoundingClientRect();
      const previousElemCenter = previousElemRect.top + previousElemRect.height / 2;
      
      this.isActive = elemCenter >= 0 && previousElemCenter < 0;
    },
  },
  mounted() {
    const containerElem = document.getElementById('main-container');
    const elem = document.getElementById(this.pageLink);
    const previousElem = document.getElementById(this.previousPageLink);
    this.checkIsActive(elem, previousElem);

    containerElem.addEventListener('scroll', () => this.checkIsActive(elem, previousElem));
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
