<template>
  <SectionTemplate>
    <template slot="title">Skills and Technology</template>
    <template slot="description">Just some of the tech I have used</template>
    
    <div class="content">
      <transition name="fade">
        <div class="main-tech" v-show="!seeMore">
          <img src="@/assets/tech-icons/nodejs.svg" >
          <img src="@/assets/tech-icons/csharp.svg" >
          <img src="@/assets/tech-icons/vue.svg" >
          <img src="@/assets/tech-icons/react.svg" >
          <img src="@/assets/tech-icons/docker.svg" >
          <img src="@/assets/tech-icons/html5.svg" >
        </div>
      </transition>

      <transition name="fade">
        <div class="skills" v-show="seeMore">
          <SkillList
            heading="Languages"
            :skills="[
              skills.nodejs,
              skills.dotnet,
              skills.typescript,
              skills.python,
              skills.java,
            ]"
          />

          <SkillList
            heading="Frameworks"
            :skills="[
              skills.vue,
              skills.react,
              skills.angular,
            ]"
          />

          <SkillList
            heading="Databases"
            :skills="[
              skills.sql,
              skills.mongodb,
            ]"
          />

          <SkillList
            heading="Tools"
            :skills="[
              skills.html5,
              skills.git,
              skills.linux,
              skills.docker,
              skills.redis,
            ]"
          />

          <SkillList
            heading="Patterns"
            :skills="[
              skills.redux,
            ]"
          />
        </div>
      </transition>
    </div>

    <div class="see-more">
      <PageButton @click="seeMore = !seeMore">
        See More
      </PageButton>
    </div>
  </SectionTemplate>
</template>

<script>
import PageButton from '../controls/PageButton.vue';
import SectionTemplate from '../controls/SectionTemplate.vue';
import SkillList from '../controls/SkillList.vue';

export default {
  components: {
    PageButton,
    SectionTemplate,
    SkillList,
  },
  data: () => ({
    seeMore: false,
    skills: {
      dotnet: {
        name: '.NET',
        icon: require('@/assets/tech-icons/csharp.svg'),
        info: '.NET Core, .NET Framework, MVC, WebAPI, Razor',
      },
      nodejs: {
        name: 'Node.js',
        icon: require('@/assets/tech-icons/nodejs.svg'),
      },
      typescript: {
        name: 'Typescript',
        icon: require('@/assets/tech-icons/typescript.svg'),
      },
      python: {
        name: 'Python',
        icon: require('@/assets/tech-icons/python.svg'),
      },
      java: {
        name: 'Java',
        icon: require('@/assets/tech-icons/java.svg'),
      },
      vue: {
        name: 'Vue.js',
        icon: require('@/assets/tech-icons/vue.svg'),
      },
      react: {
        name: 'React',
        icon: require('@/assets/tech-icons/react.svg'),
      },
      angular: {
        name: 'Angular',
        icon: require('@/assets/tech-icons/angular.svg'),
        info: 'Angular 2+',
      },
      sql: {
        name: 'SQL',
        icon: require('@/assets/tech-icons/sql.svg'),
        info: 'MySQL, SQLLite, SQLServer',
      },
      mongodb: {
        name: 'Mongo DB',
        icon: require('@/assets/tech-icons/mongodb.svg'),
        info: 'NoSQL Database',
      },
      html5: {
        name: 'HTML 5',
        icon: require('@/assets/tech-icons/html5.svg'),
        info: 'HTML, css, javascript, flexbox, bootstrap',
      },
      git: {
        name: 'Git',
        icon: require('@/assets/tech-icons/git.svg'),
      },
      linux: {
        name: 'Linux',
        icon: require('@/assets/tech-icons/linux.svg'),
      },
      docker: {
        name: 'Docker',
        icon: require('@/assets/tech-icons/docker.svg'),
      },
      redis: {
        name: 'Redis',
        icon: require('@/assets/tech-icons/redis.svg'),
      },
      redux: {
        name: 'Redux',
        icon: require('@/assets/tech-icons/redux.svg'),
        info: 'Including vuex',
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
.main-tech {
  display: flex;
  justify-content: center;
}
.content {
  margin: 30px 0;
}
.main-tech img {
  height: 140px;
  margin: 0 20px;
}
.skills {
  display: flex;
  flex-wrap: wrap;
}
.see-more {
  display: flex;
  justify-content: center;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>