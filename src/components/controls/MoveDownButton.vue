<template>
  <div
    class="container"
    @click="moveDown"
  >
    <div class="button column">
      <i class="material-icons">keyboard_double_arrow_down</i>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pageLink } = defineProps<{ pageLink?: string }>();

const moveDown = () => {
  window.location.href = `#${pageLink}`;
};
</script>

<style lang="scss" scoped>
.container {
  cursor: pointer;
  padding: 40px;
}
.button {
  position: relative;
  top: 0;
  animation: .8s bounce 1s;
  transition: top .3s;

  :nth-child(2) {
    position: relative;
    top: -15px;
  }
}
.container:hover .button {
  top: 10px;
  transition: top .3s;
}
@keyframes bounce {
  0%, 50%, 100% { top: 0; }
  25%, 75% { top: 25px; }
}
</style>
