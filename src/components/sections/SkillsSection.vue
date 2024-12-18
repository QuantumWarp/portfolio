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

import dotnet from '@/assets/tech-icons/dotnet.svg';
import nodejs from '@/assets/tech-icons/nodejs.svg';
import javascript from '@/assets/tech-icons/javascript.svg';
import typescript from '@/assets/tech-icons/typescript.svg';
import python from '@/assets/tech-icons/python.svg';
import java from '@/assets/tech-icons/java.svg';
import vuejs from '@/assets/tech-icons/vuejs.svg';
import react from '@/assets/tech-icons/react.svg';
import angular from '@/assets/tech-icons/angular.svg';
import mysql from '@/assets/tech-icons/mysql.svg';
import mongodb from '@/assets/tech-icons/mongodb.svg';
import html5 from '@/assets/tech-icons/html5.svg';
import git from '@/assets/tech-icons/git.svg';
import linux from '@/assets/tech-icons/linux.svg';
import docker from '@/assets/tech-icons/docker.svg';
import redis from '@/assets/tech-icons/redis.svg';
import redux from '@/assets/tech-icons/redux.svg';
import aws from '@/assets/tech-icons/aws.svg';
import css3 from '@/assets/tech-icons/css3.svg';
import electron from '@/assets/tech-icons/electron.svg';

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
        icon: dotnet,
        info: '.NET Core, MVC, Razor and more',
      },
      nodejs: {
        name: 'Node.js',
        icon: nodejs,
      },
      javascript: {
        name: 'Javascript',
        icon: javascript,
      },
      typescript: {
        name: 'Typescript',
        icon: typescript,
      },
      python: {
        name: 'Python',
        icon: python,
      },
      java: {
        name: 'Java',
        icon: java,
      },
      vue: {
        name: 'Vue.js',
        icon: vuejs,
      },
      react: {
        name: 'React',
        icon: react,
      },
      angular: {
        name: 'Angular',
        icon: angular,
        info: 'Angular 2+',
      },
      mysql: {
        name: 'MySQL',
        icon: mysql,
      },
      mongodb: {
        name: 'Mongo DB',
        icon: mongodb,
        info: 'NoSQL Databases',
      },
      html5: {
        name: 'HTML',
        icon: html5,
      },
      git: {
        name: 'Git',
        icon: git,
      },
      linux: {
        name: 'Linux',
        icon: linux,
        info: 'SSH, Bash and various distros',
      },
      docker: {
        name: 'Docker',
        icon: docker,
        info: 'Used in AWS and other deployment pipelines',
      },
      redis: {
        name: 'Redis',
        icon: redis,
      },
      redux: {
        name: 'Redux',
        icon: redux,
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
        icon: aws,
      },
      css: {
        name: 'CSS',
        icon: css3,
        info: 'Including flexbox and bootstrap',
      },
      electron: {
        name: 'Electron',
        icon: electron,
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
