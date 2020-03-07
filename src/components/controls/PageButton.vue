<template>
  <div class="page-button" @click="$emit('click', $event)">
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

<style lang="scss" scoped>
.page-button {
  font-size: 20px;
  color: black;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 2px 2px 3px -1px black;
  user-select: none;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: linear-gradient(to top left, var(--color-secondary) 25%, var(--color-primary) 75%);
  background-size: 400% 400%;
  background-position: right bottom;
  transition: all .2s linear;

  &:hover {
    color: lightgrey;
    background-position: left top;
    transition: all .4s linear;
  }
}
.icon {
  margin-right: 8px;
}
</style>
