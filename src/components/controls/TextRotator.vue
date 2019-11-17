<template>
  <span class="text-rotator">
    <span v-for="(word, index) in words" :key="word"
      :class="{ active: index === selectedIndex }">
      {{ word }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    words: Array,
  },
  data: () => ({
    selectedIndex: 0,
  }),
  mounted() {
    this.interval = setInterval(() =>
      this.selectedIndex = this.selectedIndex + 1 === this.words.length ? 0 : this.selectedIndex + 1
    , 5000);
  },
  destroyed() {
    clearInterval(this.interval);
  }
}
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
  transition: opacity 1s ease-in;
}
</style>
