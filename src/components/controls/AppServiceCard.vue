<template>
  <div
    class="card"
    @click="navigateToApp"
  >
    <div class="left">
      <span class="name">{{ project.name }}</span>

      <div class="badges">
        <span class="status">Live</span>
      </div>


      <span class="description">
        {{ project.description }}
      </span>

      <div class="bottom">
        <a class="github" :href="githubProfileUrl">
          <img src="/social/github.svg" />
        </a>

        <div class="tech-icons">
          <img
            v-for="icon in project.technologies"
            :src="`/tech/${icon}.svg`"
          />
        </div>
      </div>
    </div>

    <div v-if="project.image" class="right">
      <img :src="project.image">
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../../common/projects.ts';
import { githubProfileUrl } from '../../common/constants.ts';

const { project } = defineProps<{ project: Project }>();

const navigateToApp = () => {
  if (!project.siteUrl) return;
  window.location.href = project.siteUrl;
};
</script>

<style scoped>
.card {
  position: relative;
  width: min(80%, 1000px);
  border-radius: 5px;
  background-color: white;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  top: 0;
  transition: all 0.1s;
  margin-bottom: 10px;
  min-height: 200px;
  max-height: 200px;
  overflow: hidden;
}
.dark .card {
  background-color: black;
  border: 1px solid darkgray;
}
.card:hover {
  box-shadow: 0px 5px 10px -5px;
  top: -5px;
  transition: all 0.3s;
}

.card .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 25px;
  padding: 15px;
}
.card .left .name {
  font-size: 25px;
}
.card .left .description {
  flex: 1;
  font-size: 15px;
  margin-top: 6px;
}

.card .right {
  flex: 1;
  min-width: 50%;
}

.card .right img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.badges {
  display: flex;
  font-size: small;
  color: green;
  ::before {
    content: "● ";
  }
}
.github {
  display: flex;
  align-items: center;
}
.github img {
  height: 25px;
  color: black;
}
.dark .github img {
  filter: invert(1);
}
.bottom {
  width: 100%;
  display: flex;
  align-items: center;
}
.tech-icons {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 25px;
  font-size: 15px;
  opacity: 0;
  margin-left: 20px;
}
.card:hover .tech-icons {
  opacity: 0.9;
  transition: opacity 0.2s ease-in;
  transition-delay: 0.2s;
}
.tech-icons img {
  margin-left: 1px;
}
</style>
