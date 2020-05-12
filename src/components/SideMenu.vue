<template>
  <div class="side-menu">
    <div class="top">
      <img src="@/assets/logo.svg">
      <transition name="fade">
        <span
          class="name"
          :class="showName ? 'show' : ''"
        >
          John <span class="surname">Lowther</span>
        </span>
      </transition>
    </div>

    <div class="list">
      <SideMenuItem page-link="home">
        Home
      </SideMenuItem>
      <SideMenuItem page-link="about-me">
        About
      </SideMenuItem>
      <SideMenuItem page-link="skills-and-technology">
        Skills
      </SideMenuItem>
      <SideMenuItem page-link="apps-and-services">
        Apps
      </SideMenuItem>
      <SideMenuItem page-link="history">
        History
      </SideMenuItem>
      <SideMenuItem page-link="contact-me">
        Contact
      </SideMenuItem>
    </div>

    <div class="social-links" />
  </div>
</template>

<script>
import SideMenuItem from './controls/SideMenuItem.vue';

export default {
  components: {
    SideMenuItem,
  },
  data: () => ({
    showName: false,
  }),
  mounted() {
    const el = document.querySelector('#main-home');
    el.addEventListener('scroll', () => {
      this.showName = el.scrollTop > window.innerHeight * 0.6;
    });
  },
};
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
  position: relative;
  user-select: none;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid grey;
}
.side-menu .list {
  margin-top: 8vh;
  flex-direction: column;
  display: flex;
  align-items: center;
}

.side-menu .top img {
  height: 120px;
}
.name {
  position: absolute;
  top: calc(50% + 50px);
  font-weight: bold;
  margin-top: 20px;
  font-size: 30px;
  transition: opacity .5s;
  opacity: 0;
}
.surname {
  color: var(--color-secondary);
}
.name.show {
  opacity: 1;
}
@media only screen and (max-width: 1200px) {
  .side-menu {
    display: none;
  }
}
</style>
