<template>
  <div
    class="side-menu-item"
    @click="goToPageLink"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const { pageLink } = defineProps<{ pageLink: string }>();

const goToPageLink = () => {
  window.location.href = `#${pageLink}`;
};
</script>

<style lang="scss" scoped>
.side-menu-item {
  position: relative;
  font-size: 22px;
  font-weight: 600;
  height: 35px;
  padding: 5px 0px;
  user-select: none;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-secondary);
    cursor: pointer;
  }
}
.side-menu-item::before {
  content: '';
  position: absolute;
  width: 0px;
  top: calc(50% - 1px);
  left: -60px;
  height: 3px;
  background-image: linear-gradient(to right, transparent 0%, var(--color-secondary));
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
  top: calc(50% - 1px);
  right: -60px;
  height: 3px;
  background-image: linear-gradient(to right, var(--color-secondary) 0%, transparent);
  border-radius: 30% 50% 50% 30%;
}
.side-menu-item:hover::after {
  width: 50px;
  transition: width .3s;
}
</style>
