<template>
  <SectionTemplate
    title="History"
    description="An overview of my experience"
  >
    <div class="container">
      <div class="history-area">
        <HistoryNode
          v-for="(entry, index) in history"
          :top="index === 0"
          :entry="entry"
          :collapsed="selectedIndex !== index"
          @click="selectedIndex = index"
        />
      </div>
    </div>
  </SectionTemplate>
</template>

<script setup>
import SectionTemplate from '../controls/SectionTemplate.vue';
import HistoryNode from '../controls/HistoryNode.vue';
import { history } from '../../common/history.ts';
import { ref } from 'vue';

const selectedIndex = ref(0);
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
