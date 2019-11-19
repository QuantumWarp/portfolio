<template>
  <div ref="item"
    class="side-menu-item"
    :class="isActive ? 'selected' : ''"
    @click="goToPageLink">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    pageLink: String,
    previousPageLink: String,
    currentItem: String,
  },
  data: () => ({
    isActive: false,
  }),
  methods: {
    goToPageLink() {
      location.href = `#${this.pageLink}`;
    },
    checkIsActive(elem, previousElem) {
      const elemRect = elem.getBoundingClientRect();
      const elemCenter = elemRect.top + elemRect.height / 2;

      if (!previousElem) {
        this.isActive = elemCenter >= 0;
        return;
      }

      const previousElemRect = previousElem.getBoundingClientRect();
      const previousElemCenter = previousElemRect.top + previousElemRect.height / 2;
      
      this.isActive = elemCenter >= 0 && previousElemCenter < 0;
    },
  },
  mounted() {
    const containerElem = document.getElementById('main-container');
    const elem = document.getElementById(this.pageLink);
    const previousElem = document.getElementById(this.previousPageLink);
    this.checkIsActive(elem, previousElem);

    containerElem.addEventListener('scroll', () => this.checkIsActive(elem, previousElem));
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
