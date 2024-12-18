<template>
  <span class="text-rotator">
    <span
      v-for="(word, index) in words"
      :key="word"
      :class="{ active: index === selectedIndex }"
    >
      {{ word }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const { words } = defineProps<{ words: string[] }>();

let selectedIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    if (selectedIndex.value + 1 === words.length) {
      selectedIndex.value = 0;
    } else {
      selectedIndex.value += 1;
    }
  }, 5000);
});
</script>

<style scopes>
.text-rotator > span {
  position: absolute;
  opacity: 0;
  overflow: hidden;
  transition: opacity 1s ease-in;
}

.text-rotator > span.active {
  opacity: 1;
  height: 60px;
}
</style>
