<template>
  <div id="app">
    <div
      class="main-content"
      :style="show ? {} : { opacity: 0 }"
    >
      <SideMenu />
      <Home />
    </div>
  </div>
</template>

<script setup>
import Home from './Home.vue';
import SideMenu from './components/SideMenu.vue';
import { onMounted, ref } from 'vue';

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
  // --color-tile
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
@media screen and (min-width: 992px) {
  .column {
    flex: 1
  }
}
</style>

<style lang="scss">
// Tooltip styling
.tooltip {
  display: block !important;
  z-index: 10000;
  .tooltip-inner {
    background: var(--color-primary);
    text-align: center;
    max-width: 200px;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }
  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: var(--color-primary);
    z-index: 1;
  }
  &[x-placement^="top"] {
    margin-bottom: 5px;
    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  &[x-placement^="bottom"] {
    margin-top: 5px;
    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  &[x-placement^="right"] {
    margin-left: 5px;
    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
  &[x-placement^="left"] {
    margin-right: 5px;
    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }
  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
