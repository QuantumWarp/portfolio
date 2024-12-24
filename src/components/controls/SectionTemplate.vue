<template>
  <section class="section-template">
    <div class="container">
      <div class="header">
        <div class="marker" />

        <div class="text column">
          <span class="title">
            <slot name="title">
              {{ title }}
            </slot>
          </span>

          <span class="description">
            <slot name="description">
              {{ description }}
            </slot>
          </span>
        </div>
      </div>

      <div class="content">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
}>();
</script>

<style lang="scss" scoped>
.section-template {
  display: flex;
  justify-content: center;
  padding: 60px 0 80px 0;

  .content {
    padding: 10px 5% 0 5%;
    color: var(--color-text-secondary)
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
      color: var(--color-text-secondary)
    }
  }
}
.dark .header .marker {
  box-shadow: 8px 8px darkgrey;
}

@media only screen and (max-width: 992px) {
  .header {
    .marker {
      min-height: 52px;
      min-width: 52px;
    }
    .text {
      margin-left: 20px;

      .title {
        font-size: 40px;
      }
    }
  }
}
</style>
