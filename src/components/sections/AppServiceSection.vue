<template>
  <SectionTemplate>
    <template slot="title">Apps and Services</template>
    <template slot="description">Creations I have made</template>

    <div class="app-tiles row">
      <AppServiceCard class="column"
        name="Fractal Viewer"
        appUrl="https://fractal.quantumwss.com"
        :imgSrc="require('@/assets/app-tiles/fractal-viewer-tile.png')">
        View, zoom and export images of fractals in this client-side application.
      </AppServiceCard>
      
      <AppServiceCard class="column"
        name="MTG Card Organizer"
        appUrl="https://mtg.quantumwss.com"
        :imgSrc="require('@/assets/app-tiles/mtg-card-organizer-tile.png')">
        Organize and sort Magic the Gathering&trade; cards into various collections, construct decks and track life totals during games.
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
};
</script>

<style lang="scss" scoped>
.app-tiles {
  justify-content: center;

  > * {
    margin: 10px;
  }
}
</style>
