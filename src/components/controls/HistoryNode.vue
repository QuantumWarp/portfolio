<template>
  <div class="history-node" :class="coll ? 'collapsed' : ''">
    <div class="date-info"
      @mouseover="hovered = true"
      @mouseout="hovered = false"
      @click="coll = !coll"
    >{{ date }}</div>

    <div class="divider" :class="end"
      @mouseover="hovered = true"
      @mouseout="hovered = false"
      @click="coll = !coll">
      <div class="item-dot" :class="hovered ? 'hovered' : ''"></div>
    </div>

    <div class="right-info row">
      <div class="content column" :class="end">
        <div class="company-title"
          @mouseover="hovered = true"
          @mouseout="hovered = false"
          @click="coll = !coll"
        >{{ company }}</div>

        <div class="description">
          <slot name="description"></slot>
        </div>
      </div>

      <div class="images column">
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
    collapsed: Boolean,
    end: String, // 'top' or 'bottom'
  },
  data: () => ({
    coll: false,
    hovered: false
  }),
  mounted() {
    this.coll = this.collapsed;
  },
}
</script>

<style lang="scss" scoped>
.history-node {
  display: flex;
  flex-direction: row;
  max-height: 260px;
  transition: all 0.5s ease-out;
  
  &.collapsed {
    max-height: 45px;
  }
}
.date-info {
  cursor: pointer;
  width: 80px;
  padding-top: 10px;
  height: 38px;
  display: flex;
  text-align: right;
  justify-content: flex-end;
  align-items: center;
}
.divider {
  cursor: pointer;
  padding: 0px 10px;
  position: relative;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 6px;
    background-image: linear-gradient(90deg, rgb(50, 50, 50) 0%, rgb(100,100,100) 50%, rgb(50, 50, 50) 100%);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
  &.top::after  {
    border-radius: 4px 4px 0px 0px;
    top: -10px;
    height: calc(100% + 10px);
  }
  &.bottom::after  {
    border-radius: 0px 0px 8px 8px;
    height: calc(100% + 15px);
  }
}
.item-dot {
  cursor: pointer;
  border-radius: 50%;
  border: 2px white solid;
  background-color: var(--color-primary);
  width: 30px;
  height: 30px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.4);
  margin-top: 10px;

  &.hovered {
    transition: background-color .1s linear;
    background-color: var(--color-secondary);
  }
}
.right-info {
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: 12px 0px 15px 0px;
  padding-right: 15%;
}
.content:not(.top)::before {
  content: '';
  position: absolute;
  height: 3px;
  border-radius: 30%;
  width: 100%;
  background-image: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(100, 100, 100) 50%, rgb(255, 255, 255) 100%);
  top: 2px;
}
.description, .images, .content::before {
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
}
.history-node.collapsed {
  .description, .images, .content::before {
    opacity: 0;
  }
}
.company-title {
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 10px;
}
.images {
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  padding: 20px 10%;
}
@media only screen and (max-width: 992px) {
  .history-node {
    max-height: 500px;
  }
  .date-info {
    width: 40px;
  }
  .right-info {
    padding-right: 0px;
  }
  .images {
    flex: 1;
    margin: 10px 30px 0px 0px;
  }
  .description {
    width: 100%;
    padding: 20px 10px;
  }
}
</style>
