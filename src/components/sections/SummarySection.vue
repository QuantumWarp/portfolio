<template>
  <SectionTemplate>
    <template slot="title">About Me</template>
    <template slot="description">About Me</template>

    <div class="content">
      <img class="action-picture" src="@/assets/action-picture.jpg"/>

      <div class="right-content">
        <span>
          Suspendisse eget enim tortor. Curabitur volutpat ac massa ut dapibus. Morbi a erat sed risus posuere pellentesque in in lacus. Donec ac diam at mauris ultrices tempus. Integer fringilla diam non urna faucibus suscipit. Nullam eu urna non odio condimentum feugiat. Nunc maximus sapien nunc, sit amet hendrerit odio convallis vel. Etiam ipsum magna, condimentum sed urna a, lacinia iaculis nisi. Curabitur consequat lectus urna, ut sodales neque gravida vel. Integer pellentesque commodo sapien, eu tempor risus interdum in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dolor at volutpat efficitur. In rhoncus congue dapibus.
        </span>

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
  width: 350px;
  height: 450px;
}
.content {
  display: flex;
  flex-direction: row;
}
.right-content {
  margin-left: 50px;
}
.download {
  display: flex;
  justify-content: flex-end;
}
</style>
