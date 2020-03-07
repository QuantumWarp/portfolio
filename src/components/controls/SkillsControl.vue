<template>
  <div class="skills">
    <Skill
      :icon="require('@/assets/tech-icons/csharp.svg')"
      info=".NET Core, .NET Framework, MVC, WebAPI, Razor"
    >.NET</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/sql.svg')"
      info="MySQL, SQLLite, SQLServer"
    >SQL</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/nodejs.svg')"
    >Node.js</Skill>
    
    <Skill
      :icon="require('@/assets/tech-icons/vue.svg')"
    >Vue.js</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/html5.svg')"
      info="HTML, css, javascript, flexbox, bootstrap"
    >HTML 5</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/mongodb.svg')"
      info="NoSQL Database"
    >Mongo DB</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/react.svg')"
    >React</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/angular.svg')"
      info="Angular 2+"
    >Angular</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/python.svg')"
    >Python</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/java.svg')"
    >Java</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/redux.svg')"
      info="Including vuex"
    >Redux</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/git.svg')"
    >Git</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/linux.svg')"
    >Linux</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/docker.svg')"
    >Docker</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/typescript.svg')"
    >Typescript</Skill>

    <Skill
      :icon="require('@/assets/tech-icons/redis.svg')"
    >Redis</Skill>
  </div>
</template>

<script>
import Skill from './SkillPill.vue';

export default {
  components: {
    Skill,
  },
};
</script>

<style scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
}
</style>