<template>
  <div class="history-node" :class="coll ? 'collapsed' : ''">
    <div class="date-info">{{ date }}</div>

    <div class="divider" :class="end">
      <div class="item-dot" @click="coll = !coll"></div>
    </div>

    <div class="right-info">
      <div class="company-title">{{ company }}</div>

      <div class="content">
        <slot name="description"></slot>

        <div class="images">
          <slot name="images"></slot>
        </div>
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
    collapsed: Boolean,
    end: String, // 'top' or 'bottom'
  },
  data: () => ({
    coll: false,
  }),
  mounted() {
    this.coll = this.collapsed;
  },
}
</script>

<style scoped>
.history-node {
  display: flex;
  flex-direction: row;
  height: 200px;
  transition: all 0.5s ease-in-out;
}
.history-node.collapsed {
  height: 50px;
}
.date-info {
  flex: 2;
  padding-top: 22px;
  text-align: right;
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
.divider.top::after  {
  border-radius: 4px 4px 0px 0px;
  top: -10px;
  height: calc(100% + 10px);
}
.divider.bottom::after  {
  border-radius: 0px 0px 8px 8px;
  height: calc(100% + 15px);
}
.divider .item-dot {
  cursor: pointer;
  border-radius: 50%;
  border: 2px white solid;
  background-color: rgb(15, 15, 109);
  width: 30px;
  height: 30px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.4);
  margin-top: 10px;
}
.divider .item-dot:hover {
  background-color: orange;
}
.right-info {
  position: relative;
  overflow: hidden;
  flex: 14;
  padding-top: 15px;
}
.content::before {
  transition: all 0.5s ease-in-out;
  opacity: 1;
  content: '';
  position: absolute;
  height: 3px;
  border-radius: 30%;
  width: 100%;
  background-image: linear-gradient(90deg, rgba(255, 255, 255) 0%, rgba(100, 100, 100) 50%, rgba(255, 255, 255) 100%);
  top: 4px;
}
.history-node.collapsed .right-info::before {
  opacity: 0;
}
.content {
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  opacity: 1;
}
.history-node.collapsed .content {
  opacity: 0;
}
.company-title {
  font-size: 25px;
  margin-bottom: 10px;
}
.images {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
