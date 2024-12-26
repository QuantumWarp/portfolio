<template>
  <SectionTemplate
    title="Apps and Projects"
    description="Creations made by me"
  >
    <div class="app-tiles">
      <AppProjectCard
        v-for="project in projects"
        class="column"
        :project="project"
      />
    </div>
  </SectionTemplate>
</template>

<script setup>
import SectionTemplate from '../controls/SectionTemplate.vue';
import AppProjectCard from '../controls/AppProjectCard.vue';
import { projects } from '@/common/projects.ts';
</script>

<style lang="scss" scoped>
.app-tiles {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
}
@media only screen and (max-width: 1200px) {
  .app-tiles {
    margin-left: 0px;
    align-items: center;
  }
}
</style>
