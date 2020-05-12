<template>
  <SectionTemplate
    title="Skills and Technology"
    description="Some of the tech I have used"
  >
    <div class="content">
      <transition name="fade">
        <div
          v-show="!seeMore"
          class="main-tech"
        >
          <img
            v-tooltip="'Node.js & Javascript'"
            src="@/assets/tech-icons/nodejs.svg"
          >
          <img
            v-tooltip="'.NET / C#'"
            src="@/assets/tech-icons/csharp.svg"
          >
          <img
            v-tooltip="'Vue.js'"
            src="@/assets/tech-icons/vuejs.svg"
          >
          <img
            v-tooltip="'React'"
            src="@/assets/tech-icons/react.svg"
          >
          <img
            v-tooltip="'Docker'"
            src="@/assets/tech-icons/docker.svg"
          >
          <img
            v-tooltip="'HTML & CSS'"
            src="@/assets/tech-icons/html5.svg"
          >
        </div>
      </transition>

      <transition name="fade">
        <div
          v-show="seeMore"
          class="skills"
        >
          <SkillList
            heading="Languages"
            :skills="[
              skills.nodejs,
              skills.dotnet,
              skills.typescript,
              skills.javascript,
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
              skills.redux,
              skills.electron,
            ]"
          />

          <SkillList
            heading="Data"
            :skills="[
              skills.mysql,
              skills.mongodb,
              skills.sqlserver,
              skills.redis,
            ]"
          />

          <SkillList
            heading="Tools"
            :skills="[
              skills.git,
              skills.linux,
              skills.docker,
              skills.aws,
            ]"
          />

          <SkillList
            heading="Other"
            :skills="[
              skills.html5,
              skills.css,
              skills.microservices,
              skills.auth,
              skills.testing,
              skills.agile,
            ]"
          />
        </div>
      </transition>
    </div>

    <div class="see-more">
      <PageButton @click="seeMore = !seeMore">
        See {{ seeMore ? 'Less' : 'More' }}
      </PageButton>
    </div>
  </SectionTemplate>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
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
        name: '.NET / C#',
        icon: require('@/assets/tech-icons/dotnet.svg'),
        info: '.NET Core, MVC, Razor and more',
      },
      nodejs: {
        name: 'Node.js',
        icon: require('@/assets/tech-icons/nodejs.svg'),
      },
      javascript: {
        name: 'Javascript',
        icon: require('@/assets/tech-icons/javascript.svg'),
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
        icon: require('@/assets/tech-icons/vuejs.svg'),
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
      mysql: {
        name: 'MySQL',
        icon: require('@/assets/tech-icons/mysql.svg'),
      },
      mongodb: {
        name: 'Mongo DB',
        icon: require('@/assets/tech-icons/mongodb.svg'),
        info: 'NoSQL Databases',
      },
      html5: {
        name: 'HTML',
        icon: require('@/assets/tech-icons/html5.svg'),
      },
      git: {
        name: 'Git',
        icon: require('@/assets/tech-icons/git.svg'),
      },
      linux: {
        name: 'Linux',
        icon: require('@/assets/tech-icons/linux.svg'),
        info: 'SSH, Bash and various distros',
      },
      docker: {
        name: 'Docker',
        icon: require('@/assets/tech-icons/docker.svg'),
        info: 'Used in AWS and other deployment pipelines',
      },
      redis: {
        name: 'Redis',
        icon: require('@/assets/tech-icons/redis.svg'),
      },
      redux: {
        name: 'Redux',
        icon: require('@/assets/tech-icons/redux.svg'),
      },
      microservices: {
        name: 'Microservices',
      },
      auth: {
        name: 'Authorisation',
        info: 'Experience with OAuth in various languages',
      },
      aws: {
        name: 'AWS',
        icon: require('@/assets/tech-icons/aws.svg'),
      },
      css: {
        name: 'CSS',
        icon: require('@/assets/tech-icons/css3.svg'),
        info: 'Including flexbox and bootstrap',
      },
      electron: {
        name: 'Electron',
        icon: require('@/assets/tech-icons/electron.svg'),
      },
      sqlserver: {
        name: 'SQLServer',
      },
      testing: {
        name: 'Testing',
        info: 'Unit, Integration and Automation Testing',
      },
      agile: {
        name: 'Scrum / Agile',
      },

      // Unused
      npm: {},
      mocha: {},
      nginx: {},
      slack: {},
      microsoftTeams: {},
      sqllite: {},
      ubuntu: {},
      solid: {},
      machineLearning: {},
      mvc: {},
      razor: {},
      iis: {},
      yeoman: {},
      gulp: {},
      drawio: {},
      jira: {},
      vscode: {},
      buddy: {},
      jenkins: {},
      azure: {},
      oracleSQL: {},
      sqlServer: {},
      mySQL: {},
      svn: {},
      unity: {},
      hyperV: {},
      virtualBox: {},
      blender: {},
      oauth: {},
      bitbucket: {},
      github: {},
      sass: {},
      kubernetes: {},
    },
  }),
};
</script>

<style lang="scss" scoped>
.main-tech {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

  > * {
    margin: 0 15px;
  }
}
.see-more {
  margin-top: 30px;
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
@media only screen and (max-width: 992px) {
  .content {
    margin: 0 0;
  }
  .main-tech img {
    height: 120px;
    margin: 0 5px;
  }
  .skills > * {
    margin-bottom: 20px;
    min-width: 55vw;
  }
}
</style>
