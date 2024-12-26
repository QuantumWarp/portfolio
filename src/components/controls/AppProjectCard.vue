<template>
  <a
    class="card"
    :href="project.siteUrl"
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
        <div>
          <a v-if="project.githubUrl" class="github" :href="project.githubUrl">
            <img src="/social/github.svg" />
          </a>
        </div>

        <div class="tech-icons">
          <img
            v-for="icon in project.technologies"
            v-bind:key="icon"
            :src="`./tech/${icon}.svg`"
            :title="Case.title(icon)"
            :alt="Case.title(icon)"
          />
        </div>
      </div>
    </div>

    <div v-if="project.image" class="right">
      <img :src="(darkMode && project.darkModeImage) ? project.darkModeImage : project.image">
    </div>
  </a>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Case from 'case';
import type { Project } from '@/common/projects.ts';

const appEl = document.getElementById("app")!;
const darkMode = ref(appEl.classList.contains('dark'));
const { project } = defineProps<{ project: Project }>();

onMounted(() => {
  const observer = new MutationObserver(() => {
    darkMode.value = appEl.classList.contains('dark');
  });
  observer.observe(appEl, { attributes: true, attributeFilter: ['class'] });
})
</script>

<style scoped>
.card {
  all: unset;
  position: relative;
  width: min(90%, 800px);
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
  height: 200px;
  max-height: 200px;
  overflow: hidden;
}
.dark .card {
  background-color: black;
  border: 1px solid #666;
  color: var(--color-text-secondary);
}
.card:hover {
  box-shadow: 0px 5px 10px -5px;
  top: -5px;
  transition: all 0.3s;
}
.dark .card:hover {
  box-shadow: 0px 5px 3px -5px;
}
.card .left {
  width: 50%;
  max-width: 50%;
  box-sizing: border-box;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 25px;
  padding: 15px;
}
.card .left .name {
  font-size: 25px;
  color: var(--color-text-primary);
}
.card .left .description {
  flex: 1;
  font-size: 15px;
  margin-top: 5px;
  display: flex;
  align-items: center;
}

.card .right {
  height: 100%;
  max-height: 100%;
  width: 50%;
  max-width: 50%;
  opacity: 0.75;
}

.card:hover .right {
  opacity: 1;
  transition: opacity 0.2s ease-in;
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
  opacity: 0;
  ::before {
    content: "● ";
  }
}
.card:hover .badges {
  opacity: 1;
  transition: opacity 0.2s ease-in;
  transition-delay: 0.2s;
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
  margin-top: 20px;
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
  margin-left: 3px;
}
@media only screen and (max-width: 992px) {
  .card {
    flex-direction: column;
    height: 350px;
    max-height: 350px;
    margin-bottom: 20px;
  }
  .card .left {
    height: 50%;
    max-height: 50%;
    width: 100%;
    max-width: 100%;
  }
  .card .right {
    height: 50%;
    max-height: 50%;
    width: 100%;
    max-width: 100%;
  }
}
</style>
