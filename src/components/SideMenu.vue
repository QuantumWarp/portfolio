<template>
  <div class="side-menu">
    <div class="top">
      <img src="/logo.svg">
      <span
        class="name"
        :class="showName ? 'show' : ''"
      >
        John <span class="surname">Lowther</span>
      </span>
    </div>

    <div class="list">
      <SideMenuItem page-link="home">
        Home
      </SideMenuItem>
      <SideMenuItem page-link="about-me">
        About
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

    <div class="social-links">
      <a :href="githubProfileUrl">
        <img src="/social/github.svg" />
      </a>
      <a :href="linkedinUrl">
        <img src="/social/linkedin.svg" />
      </a>
      <DarkToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { linkedinUrl, githubProfileUrl } from "@/common/constants.ts"

import SideMenuItem from '@/components/controls/SideMenuItem.vue';
import DarkToggle from '@/components/controls/DarkToggle.vue'

const showName = ref(false);

onMounted(() => {
  const el = document.querySelector('#main-home');
  el.addEventListener('scroll', () => {
    showName.value = el.scrollTop > window.innerHeight * 0.6;
  });
})
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
  flex: 1;
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
.social-links {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.social-links img, .social-links i {
  height: 25px;
  color: black;
  filter: invert(1);
  margin-left: 4px;
  margin-right: 4px;
}
a, i {
  cursor: pointer;
  user-select: none;
}

@media only screen and (max-width: 1200px) {
  .side-menu {
    display: none;
  }
}
</style>
