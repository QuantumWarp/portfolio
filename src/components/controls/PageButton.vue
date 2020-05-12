<template>
  <button
    class="page-button"
    @click="$emit('click', $event)"
  >
    <div class="page-button-content">
      <v-icon
        v-if="icon"
        class="icon"
        :name="icon"
        scale="1.8"
      />

      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: null },
  },
};
</script>

<style lang="scss" scoped>
button.page-button {
  outline: none;
  border: none;
  padding: 1px 1px;

  > .page-button-content {
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
    transition: background-position .2s linear, color .2s linear;

    &:hover {
      color: lightgrey;
      background-position: left top;
      transition: background-position .4s linear, color .4s linear;
    }
  }
}
button.page-button:active {
  padding: 2px 0px 0px 2px;

  > .page-button-content {
    box-shadow: none;
  }
}
.icon {
  margin-right: 8px;
}
</style>
