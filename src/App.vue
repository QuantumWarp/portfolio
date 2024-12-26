<template>
  <div id="app">
    <div
      class="main-content"
      :style="show ? {} : { opacity: 0 }"
    >
      <SideMenu />
      <HomePage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomePage from '@/HomePage.vue';
import SideMenu from '@/components/SideMenu.vue';

const show = ref(false);

onMounted(() => {
  setTimeout(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
    }
    show.value = true;
  }, 50);
})
</script>

<style lang="scss">
:root {
  --color-primary: #070B5A;
  --color-secondary: #E0871F;

  --color-text-primary: #000;
  --color-text-secondary: #000;
  --color-background: white;
  --color-background-alternate: rgb(240, 240, 240);
}
:root .dark {
  --color-primary: #070B5A;

  --color-text-primary: #fff;
  --color-text-secondary: #ddd;

  --color-background: #141414;
  --color-background-alternate: #212121;
}

html, body, #app, .main-content {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  width: 100%;
}
#app {
  background-color: lightgrey;
}
.main-content {
  transition: opacity .3s;
  background-color: var(--color-background);
}
#app, .tooltip, button {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}
.dark a {
  color: #4FD1C5;
}
.dark a:visited {
  color: #8A2BE2;
}
@media screen and (min-width: 992px) {
  .column {
    flex: 1
  }
}
</style>
