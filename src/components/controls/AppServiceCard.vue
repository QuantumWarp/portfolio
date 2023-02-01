<template>
  <div
    class="app-service-card"
    @click="navigateToApp"
  >
    <img :src="imgSrc">

    <span class="name">{{ name }}</span>

    <span class="description">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: { type: String, required: true },
    appUrl: { type: String, default: null },
    name: { type: String, required: true },
  },
  methods: {
    navigateToApp() {
      if (!this.appUrl) return;
      window.location.href = this.appUrl;
    },
  },
};
</script>

<style scoped>
.app-service-card {
  position: relative;
  max-width: 400px;
  border-radius: 3px;
  background-color: white;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  top: 0;
  transition: all 0.1s;
}
.app-service-card:hover {
  box-shadow: 0px 5px 10px -5px;
  top: -10px;
  transition: all 0.3s;
}
.app-service-card > img {
  border-radius: 3px 3px 0px 0px;
  object-fit: cover;
  max-width: 100%;
  height: 200px;
}
.app-service-card > .name {
  text-align: center;
  font-size: 25px;
  padding: 15px;
}
.app-service-card > .description {
  font-size: 15px;
  padding: 0px 30px 20px 30px;
}
</style>
