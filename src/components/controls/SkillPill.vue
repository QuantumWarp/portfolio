<template>
  <div class="skill-pill" :title="info">
    <img v-if="icon" :src="icon" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    info: String,
  },
};
</script>

<style scoped>
.skill-pill {
  display: flex;
  flex-direction: row;
  align-items: center;
}
img {
  margin-right: 10px;
  height: 25px;
}
</style>