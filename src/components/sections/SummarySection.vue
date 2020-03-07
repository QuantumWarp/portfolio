<template>
  <SectionTemplate>
    <template slot="title">About Me</template>
    <template slot="description">A quick summary</template>

    <div class="content row">
      <img class="action-picture column" src="@/assets/action-picture.jpg"/>

      <div class="right-content column">
        <span class="summary-text">
          Hi, I'm John, currently a full time Software Developer working for Webeo on the development of website personalisation tools.
          I am capable, dedicated and constantly strive for excellence both personally and on any task or project I am working on.
        </span>

        <div class="main-points">
          <span>6 years experience in the industry</span>
          <span>Proficient in multiple languages and technologies</span>
          <span>Designing and implementing full, maintainable solutions</span>
        </div>

        <div class="download">
          <a href="John Lowther CV 20190303.doc" style="text-decoration: none">
            <PageButton v-tooltip="'CV not up to date with current job information'">Download CV</PageButton>
          </a>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '../controls/SectionTemplate.vue';
import PageButton from '../controls/PageButton.vue';

export default {
  components: {
    SectionTemplate,
    PageButton,
  },
}
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
