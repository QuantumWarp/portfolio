<template>
  <div class="history-node">
    <div class="date-info">{{ date }}</div>

    <div class="divider">
      <div class="item-dot"></div>
    </div>

    <div class="right-info">
      <div class="right-info-text">
        <div class="company-title">{{ company }}</div>
        <slot name="description"></slot>
      </div>

      <div class="images">
        <slot name="images"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    company: String,
    link: String,
  },
}
</script>

<style scoped>
.history-node {
  display: flex;
  flex-direction: row;
  min-height: 200px;
}
.date-info {
  flex: 2;
}
.divider {
  margin: 0px 10px;
  position: relative;
}
.divider::after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 6px;
  background-image: linear-gradient(90deg, rgba(50, 50, 50) 0%, rgba(100,100,100) 50%, rgba(50, 50, 50) 100%);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
.divider .item-dot {
  border-radius: 50%;
  border: 4px white solid;
  background-color: rgb(15, 15, 109);
  width: 30px;
  height: 30px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.4);
  margin-top: 10px;
}
.right-info {
  flex: 10;
  display: flex;
  flex-direction: row;
}
.right-info-text {
  flex: 8;
}
.company-title {
  font-size: 25px;
}
.images {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
