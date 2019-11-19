<template>
  <div ref="item"
    class="side-menu-item"
    :class="selected ? 'selected' : ''"
    @click="goToPageLink">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    pageLink: String,
    selected: String,
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
  position: relative;
  font-size: 22px;
  font-weight: 600;
  padding: 5px 0px;
  user-select: none;
}
.side-menu-item:hover {
  color: orange;
  cursor: pointer;
}
.side-menu-item::before {
  content: '';
  position: absolute;
  width: 0px;
  top: 50%;
  left: -60px;
  height: 3px;
  background-image: linear-gradient(to right, transparent 0%, orange);
  border-radius: 50% 30% 30% 50%;
}
.side-menu-item:hover::before {
  width: 50px;
  transition: width .3s;
}
.side-menu-item::after {
  content: '';
  position: absolute;
  width: 0px;
  top: 50%;
  right: -60px;
  height: 3px;
  background-image: linear-gradient(to right, orange 0%, transparent);
  border-radius: 30% 50% 50% 30%;
}
.side-menu-item:hover::after {
  width: 50px;
  transition: width .3s;
}
</style>
