<template>
  <div class="section-template" :class="shaded ? 'shaded' : ''">
    <div class="container">
      <div class="header column">
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
  </div>
</template>

<script>
export default {
  props: {
    shaded: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.section-template {
  padding: 60px 5%;
  display: flex;
  justify-content: center;

  &.shaded {
    background-color: rgb(240, 240, 240);
  }
}
.container {
  max-width: 1500px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  position: relative;
  margin-left: 200px;
  margin-bottom: 40px;
  
  .title {
    font-size: 48px;
    font-weight: bold;
  }

  .description {
    font-size: 18px;
  }
}
.header::before {
  content: '';
  position: absolute;
  height: 100%;
  border-left: 6px var(--color-secondary) solid;
  border-style: solid;
  border-width: 0 0 25px 25px;
  width: 50%;
  background-color: var(--color-secondary);
  right: 100%;
  
}
</style>
