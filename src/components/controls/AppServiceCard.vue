<template>
  <div class="app-service-card" @click="navigateToApp">
    <img :src="imgSrc"/>

    <span class="name">{{ name }}</span>

    <span class="description">
      <slot name="description"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    appUrl: String,
    name: String,
    description: String,
  },
  methods: {
    navigateToApp() {
      window.location.href = this.appUrl;
    }
  },
}
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
  font-size: 25px;
  padding: 10px 10px 5px 10px;
}
.app-service-card > .description {
  font-size: 15px;
  padding: 5px 10px 10px 10px;
}
</style>
