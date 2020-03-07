<template>
  <div class="skill-pill" :title="info">
    <slot></slot>
    <img v-if="icon" :src="icon" >
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
  border: 1px solid grey;
  padding: 0 8px;
  border-radius: 40px;
  margin: 2px;
  user-select: none;
}
img {
  margin-left: 2px;
  height: 25px;
}
</style>