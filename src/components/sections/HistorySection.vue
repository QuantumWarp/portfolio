<template>
  <SectionTemplate
    title="History"
    description="An overview of my experience"
  >
    <div class="container">
      <div class="history-area">
        <HistoryNode
          v-for="(entry, index) in history"
          v-bind:key="entry.name"
          :top="index === 0"
          :entry="entry"
          :collapsed="selectedIndex !== index"
          @click="selectedIndex = (selectedIndex === index ? -1 : index)"
        />
      </div>
    </div>
  </SectionTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { history } from '@/common/history.ts';
import SectionTemplate from '@/components/controls/SectionTemplate.vue';
import HistoryNode from '@/components/controls/HistoryNode.vue';

const selectedIndex = ref(-1);
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}
.history-area {
  max-width: 1200px;
  width: 800px;
}
img {
  width: 150px;
}
@media only screen and (max-width: 992px) {
  .history-area {
    max-width: 100%;
  }
}
</style>
