<template>
  <SectionTemplate
    title="About Me"
    description="A quick summary"
  >
    <div class="content row">
      <img
        class="action-picture column"
        src="/main/action-picture.jpg"
      >

      <div class="right-content column">
        <span class="summary-text">
          Hi, I'm John, I am a Full Stack software engineer with over
          <b>{{ yearsFromDate(new Date(2013, 8, 1)) }} years</b>
          of experience working in the industry. My primary expertise is in React and Node.js,
          which I have used extensively to create new products and solutions in both a professional and
          personal capacity. I always have something I am working on, but don't hesitate to ask me
          any questions.
        </span>

        <ul class="main-points">
          <li>Proficient in multiple languages and technologies.</li>
          <li>Designing and implementing full, maintainable solutions.</li>
          <li>Many projects on my <a href="https://github.com/QuantumWarp">GitHub</a>. More detailed links and information below.</li>
        </ul>
      </div>
    </div>
  </SectionTemplate>
</template>

<script setup>
import { yearsFromDate } from "@/common/duration.ts";
import SectionTemplate from '../controls/SectionTemplate.vue';
</script>

<style lang="scss" scoped>
.action-picture {
  object-fit: cover;
  max-width: 50%;
  height: 450px;
  max-height: 80vw;
  border-radius: 15px 60px;
}
.content {
  display: flex;
  flex-direction: row;
}
.right-content {
  padding: 50px;
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
}
.main-points {
  margin-top: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  > span {
    position: relative;
  }
}
.download {
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 992px) {
  .action-picture {
    max-width: 100%;
    border-radius: 10px;
  }
  .right-content {
    padding: 20px 10px;
  }
  .main-points {
    margin: 20px 0px 20px 20px;
  }
  .download {
    display: flex;
    justify-content: center;
  }
}
</style>
