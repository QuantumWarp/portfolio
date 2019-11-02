<template>
  <div class="app-service-card">
    <img :src="imgSrc"/>
    <span class="name">{{ name }}</span>
    <span class="description">{{ description }}</span>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    name: String,
    description: String,
  }
}
</script>
<style scoped>
.app-service-card {
  width: 400px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
}
.app-service-card:hover {
  box-shadow: 0 0 10px;
  transition: box-shadow 0.3s;
}
.app-service-card > img {
  border-radius: 3px 3px 0px 0px;
  object-fit: cover;
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
