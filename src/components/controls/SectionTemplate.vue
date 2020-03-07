<template>
  <div class="section-template" :class="shaded ? 'shaded' : ''">
    <div class="container">
      <div class="header">
        <div class="marker" />
  
        <div class="text column">
          <span class="title">
            <slot name="title"></slot>
          </span>

          <span class="description">
            <slot name="description"></slot>
          </span> 
        </div>
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
  display: flex;
  justify-content: center;
  padding: 60px 0 80px 0;

  .content {
    padding: 10px 5% 0 5%;
  }
}
.container {
  max-width: 1500px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  align-items: center;
  padding: 0 4% 20px 4%;

  .marker {
    min-height: 62px;
    min-width: 62px;
    background-color: var(--color-secondary);
    box-shadow: 8px 8px black;
  }

  .text {
    margin-left: 50px;
    
    .title {
      font-size: 48px;
      font-weight: bold;
    }

    .description {
      font-size: 18px;
    }
  }
}
</style>
