<template>
  <SectionTemplate
    title="Apps and Services"
    description="Creations I have made"
  >
    <div class="app-tiles">
      <AppServiceCard
        v-for="project in projects"
        class="column"
        :project="project"
      />
    </div>
  </SectionTemplate>
</template>

<script setup>
import SectionTemplate from '../controls/SectionTemplate.vue';
import AppServiceCard from '../controls/AppServiceCard.vue';
import { projects } from '@/common/projects.ts';
</script>

<style lang="scss" scoped>
.app-tiles {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
