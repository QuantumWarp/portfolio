<template>
  <SectionTemplate>
    <template slot="title">Apps and Services</template>
    <template slot="description">Creations I have made</template>

    <div class="app-tiles">
      <AppServiceCard v-for="app in appData" :key="app.name"
        :name="app.name"
        :description="app.description"
        :imgSrc="app.imgSrc"
        :appUrl="app.appUrl"
      ></AppServiceCard>
    </div>
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '../controls/SectionTemplate.vue';
import AppServiceCard from '../AppServiceCard.vue';

export default {
  components: {
    SectionTemplate,
    AppServiceCard,
  },
  data: () => ({
    appData: [
      {
        name: 'Fractal Viewer',
        description: '\
            View fractals and zoom into fractals in this pure front-end Angular application.\
            Save interesting areas you see to create cool backgrounds.\
            Not optimized for mobile.',
        imgSrc: require('@/assets/fractal-viewer-tile.png'),
        appUrl: 'https://fractal.quantumwss.com',
      },
      {
        name: 'MTG Card Organizer',
        description: '\
            Organize and sort Magic the Gathering cards into various collections, make decks and track life totals during games.\
            Built with a .NET server with an Angular front-end.\
            This is a work in progress and not optimized for mobile.',
        imgSrc: require('@/assets/mtg-card-organizer-tile.png'),
        appUrl: 'https://mtg.quantumwss.com',
      },
    ],
  }),
}
</script>

<style scoped>
.app-tiles {
  display: flex;
  flex-direction: row;
}
.app-tiles > * {
  margin: 10px;
}
</style>
