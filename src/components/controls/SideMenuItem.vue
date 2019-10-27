<template>
  <div class="side-menu-item" @click="goToPageLink">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    pageLink: String,
  },
  methods: {
    goToPageLink() {
      location.href = `#${this.pageLink}`;
    },
  },
}
</script>

<style scoped>
.side-menu-item {
  font-size: 22px;
  font-weight: 600;
  padding: 5px 0px;
}

.side-menu-item:hover {
  color: orange;
  cursor: pointer;
}
</style>
