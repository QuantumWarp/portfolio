<template>
  <i class="material-icons" @click="toggleDark">
    {{ darkMode ? "light_mode" : "dark_mode" }}
  </i>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const el = document.getElementById("app")!;
let localDark = localStorage.getItem("portfolio-dark");

if (!localDark) {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  localStorage.setItem("portfolio-dark", systemDark.matches.toString());
  localDark = systemDark.matches.toString();
}

const darkMode = ref(localDark === "true")

if (darkMode.value) {
  el.classList.add("dark")
}

const toggleDark = () => {
  if (darkMode.value) el.classList.remove("dark");
  else el.classList.add("dark");

  darkMode.value = !darkMode.value;
  localStorage.setItem("portfolio-dark", darkMode.value.toString());
};
</script>

<style scoped>
i {
  cursor: pointer;
  user-select: none;
  height: 25px;
  color: black;
  filter: invert(1);
}
</style>
