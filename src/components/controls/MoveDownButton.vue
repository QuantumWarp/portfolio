<template>
  <div class="container" @click="moveDown">
    <div class="button column">
      <v-icon name="chevron-down" scale="1.7"/>
      <v-icon name="chevron-down" scale="1.7"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageLink: String,
  },
  methods: {
    moveDown() {
      location.href = `#${this.pageLink}`;
    },
  },
}
</script>

<style scoped>
.container {
  cursor: pointer;
  padding: 40px;
}
.button {
  position: relative;
  top: 0;
  animation: .8s bounce 1s;
  transition: top .3s;
}
.container:hover .button {
  top: 10px;
  transition: top .3s;
}
.button :nth-child(2) {
  position: relative;
  top: -15px;
}
@keyframes bounce {
  0%, 50%, 100% { top: 0; }
  25%, 75% { top: 25px; }
}
</style>
