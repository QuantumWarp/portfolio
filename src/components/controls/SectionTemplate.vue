<template>
  <div class="section-template">
    <div class="header">
      <span class="title">
        <slot name="title"></slot>
      </span>

      <span class="description">
        <slot name="description"></slot>
      </span>
    </div>

    <div class="content">
      
    </div>
  </div>
</template>

<style scoped>
.section-template {
  padding: 20px 10%;
}
.header {
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 40px;
}
.description {
  font-size: 18px;
}
</style>
