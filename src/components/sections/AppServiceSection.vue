<template>
  <SectionTemplate :shaded="true">
    <template slot="title">Apps and Services</template>
    <template slot="description">Creations I have made</template>

    <div class="app-tiles">
      <AppServiceCard
        name="Fractal Viewer"
        appUrl="https://fractal.quantumwss.com"
        :imgSrc="require('@/assets/fractal-viewer-tile.png')">
        <template slot="description">
          View fractals and zoom into fractals in this pure front-end Angular application.
          Save interesting areas you see to create cool backgrounds.
          Not optimized for mobile.
        </template>
      </AppServiceCard>
      
      <AppServiceCard
        name="MTG Card Organizer"
        appUrl="https://mtg.quantumwss.com"
        :imgSrc="require('@/assets/mtg-card-organizer-tile.png')">
        <template slot="description">
          Organize and sort Magic the Gathering cards into various collections, make decks and track life totals during games.
          Built with a .NET server with an Angular front-end.
          This is a work in progress and not optimized for mobile.
        </template>
      </AppServiceCard>
    </div>
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '../controls/SectionTemplate.vue';
import AppServiceCard from '../controls/AppServiceCard.vue';

export default {
  components: {
    SectionTemplate,
    AppServiceCard,
  },
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
