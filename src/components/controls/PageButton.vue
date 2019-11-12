<template>
  <div class="page-button">
    <v-icon v-if="icon" class="icon" :name="icon" scale="1.8"/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
  },
}
</script>
<style scoped>
.page-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 3px -1px black;
  user-select: none;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: linear-gradient(to top left, orange 25%, rgb(15, 15, 109) 75%);
  background-size: 400% 400%;
  background-position: right bottom;
  transition: all .2s linear;
}
.page-button:hover {
  font-size: 20px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 3px -1px black;
  color: lightgrey;
  background-position: left top;
  transition: all .4s linear;
}
.icon {
  margin-right: 8px;
}
</style>
