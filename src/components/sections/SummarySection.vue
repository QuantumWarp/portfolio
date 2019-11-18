<template>
  <SectionTemplate>
    <template slot="title">About Me</template>
    <template slot="description">About Me</template>

    <div class="content row">
      <img class="action-picture column" src="@/assets/action-picture.jpg"/>

      <div class="right-content column">
        <span class="summary-text">
          Hi, summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary 
        </span>

        <div class="main-points">
          <span>6 years expierence in the industry</span>
          <span>Proficient in multiple languages and technologies</span>
          <span>Designing and implementing full solutions</span>
        </div>

        <div class="download">
          <PageButton>Download CV</PageButton>
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

<style scoped>
.action-picture {
  object-fit: cover;
  max-width: 50%;
  height: 450px;
  max-height: 80vw;
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
}
.main-points > span {
  position: relative;
}
.main-points > span::before{
  content: '';
  position: absolute;
  border-radius: 50%;
  background-color: black;
  top: 10px;
  left: -10px;
  height: 5px;
  width: 5px;  
}
.download {
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 992px) {
  .action-picture {
    max-width: 100%;
  }
}
</style>
