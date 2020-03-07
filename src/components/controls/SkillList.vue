<template>
  <div class="skill-list">
    <div class="heading">{{ heading }}</div>
    <div class="list">
      <SkillPill
        v-for="skill in skills"
        :key="skill.name"
        :icon="skill.icon"
        :info="skill.info"
      >{{ skill.name }}</SkillPill>
    </div>
  </div>
</template>

<script>
import SkillPill from './SkillPill.vue';

export default {
  components: {
    SkillPill,
  },
  props: {
    heading: String,
    skills: Array,
  },
};
</script>

<style lang="scss" scoped>
.skill-list {
  flex: 1;

  > .heading {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
  }

  > .list {
    display: flex;
    flex-direction: column;

    > * {
      margin-left: 20%;
      margin-bottom: 10px;
    }
  }
}
</style>