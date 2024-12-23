<template>
  <div
    class="history-node"
    :class="{ collapsed }"
    @click="collapsed = !collapsed"
  >
    <div class="date-info">
      {{ entry.date }}
    </div>

    <div class="divider" :class="top ? 'top' : ''">
      <div class="item-dot" />
    </div>

    <div class="right-info row">
      <div class="content column">
        <div class="company-title">
          {{ entry.name }}
        </div>

        <div class="tech-icons">
          <img
            v-for="icon in entry.technologies"
            :src="`/tech/${icon}.svg`"
          />
        </div>
      </div>

      <div class="image">
        <img :src="entry.image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { HistoryEntry } from '../../common/history.ts';

const { entry, top } = defineProps<{ entry: HistoryEntry, top: boolean }>();

const collapsed = ref(!top);
</script>

<style lang="scss" scoped>
.history-node {
  display: flex;
  flex-direction: row;
  max-height: 200px;
  transition: all 0.2s ease-out;

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
  z-index: 1;

  &::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 6px;
    background-image: linear-gradient(
      90deg,
      rgb(50, 50, 50) 0%,
      rgb(100,100,100) 50%,
      rgb(50, 50, 50) 100%);
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
  &::after  {
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
}
.history-node:hover .item-dot {
  transition: background-color .1s linear;
  background-color: var(--color-secondary);
}
.right-info {
  position: relative;
  overflow: hidden;
  flex: 1;
  padding: 12px 0px 15px 0px;
  padding-right: 10%;
}
.tech-icons, .image, .content::before {
  transition: opacity 0.2s ease-in-out;
  opacity: 1;
}
.history-node.collapsed {
  .tech-icons, .image, .content::before {
    opacity: 0;
  }
}
.company-title {
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 10px;
}
.tech-icons {
  flex: 1;
  display: flex;
  align-items: center;
  height: 25px;
  font-size: 15px;
}
.tech-icons img {
  height: 25px;
}
.image {
  display: flex;
  align-items: flex-end;
}
.image img {
  height: 50px;
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
}
</style>
