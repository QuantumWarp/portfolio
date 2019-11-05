<template>
  <SectionTemplate>
    <template slot="title">About Me</template>
    <template slot="description">About Me</template>

    <img class="action-picture" src="@/assets/action-picture.jpg"/>

    <PageButton>Download CV</PageButton>
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
  width: 350px;
  height: 450px;
}
</style>
