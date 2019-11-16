<template>
  <div class="section-template" :class="shaded ? 'shaded' : ''">
    <div class="header">
      <span class="title">
        <slot name="title"></slot>
      </span>

      <span class="description">
        <slot name="description"></slot>
      </span> 
    </div>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shaded: Boolean,
  },
}
</script>

<style scoped>
.shaded {
  background-color: rgb(240, 240, 240);
}
.section-template {
  padding: 60px 10%;
}
.header {
  border-left: 6px orange solid;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}
.title {
  font-size: 40px;
}
.description {
  font-size: 18px;
  display: flex;
  flex-direction: row;
}
.underline {
  background-color: orange;
  height: 3px;
  width: 400px;
  margin-left: 50px;
}
</style>
