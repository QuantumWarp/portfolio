<template>
  <div
    v-tooltip="info"
    class="skill-pill"
    :title="info"
  >
    <img
      v-if="icon"
      :src="icon"
    >

    <div
      v-if="!icon"
      class="default"
    />

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: null },
    info: { type: String, required: true },
  },
};
</script>

<style scoped>
.skill-pill {
  display: flex;
  flex-direction: row;
  align-items: center;
}
img, .default {
  margin-right: 10px;
  height: 25px;
  width: 25px;
}
.default {
  position: relative;
}
.default::after {
  position: absolute;
  content: '';
  top: 45%;
  left: 20%;
  width: 50%;
  border: 1px solid grey;
}
</style>
