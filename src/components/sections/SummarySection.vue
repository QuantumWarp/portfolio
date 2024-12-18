<template>
  <SectionTemplate
    title="About Me"
    description="A quick summary"
  >
    <div class="content row">
      <img
        class="action-picture column"
        src="@/assets/action-picture.jpg"
      >

      <div class="right-content column">
        <span class="summary-text">
          Hi, I'm John, I am a Full Stack software engineer with over 9 years of experience working
          in the industry. My primary expertise is in React, Vue, .NET and Node.js, all of which I
          have used extensively to create new products and solutions in both a professional and
          personal capacity. I always have something I am working on, but don't hesitate to ask me
          any questions.
        </span>

        <div class="main-points">
          <!-- <span>{{ durationText(new Date(2013, 8, 1)) }} years experience in the industry</span> -->
          <span>Many projects on my <a href="https://github.com/QuantumWarp">GitHub</a></span>
          <span>Proficient in multiple languages and technologies</span>
          <span>Designing and implementing full, maintainable solutions</span>
        </div>

        <div class="download">
          <a
            href="John Lowther - 2301 - CV.docx"
            style="text-decoration: none"
          >
            <PageButton v-tooltip="'CV not up to date with current job information'">
              Download CV
            </PageButton>
          </a>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>

<script setup>
import SectionTemplate from '../controls/SectionTemplate.vue';
import PageButton from '../controls/PageButton.vue';
</script>

<style lang="scss" scoped>
.action-picture {
  object-fit: cover;
  max-width: 50%;
  height: 450px;
  max-height: 80vw;
  border-radius: 20px 80px;
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

  > span::before{
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: black;
    top: 10px;
    left: -10px;
    height: 5px;
    width: 5px;
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
