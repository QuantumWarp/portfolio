<template>
  <div class="section-template">
    <div class="header">
      <span class="title">
        <slot name="title"></slot>
      </span>

      <span class="description">
        <slot name="description"></slot>
        <div class="underline"></div>
      </span> 
    </div>

    <div class="content">
      <slot></slot>
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
