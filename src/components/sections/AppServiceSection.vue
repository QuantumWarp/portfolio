<template>
  <SectionTemplate
    title="Apps and Services"
    description="Creations I have made"
  >
    <div class="app-tiles row">
      <AppServiceCard
        class="column"
        name="Fractal Viewer"
        app-url="https://quantumwarp.github.io/fractal-viewer/"
        img-src="@/assets/app-tiles/fractal-viewer-tile.png"
      >
        View, zoom and export images of fractals in this client-side application.
      </AppServiceCard>

      <AppServiceCard
        class="column"
        name="Stitch Patterns"
        app-url="https://quantumwarp.github.io/stitch-patterns/"
        img-src="@/assets/app-tiles/stitch-patterns.png"
      >
        Create and save new knitting patterns.
        Track knitting progress with the row counter and timer.
      </AppServiceCard>

      <AppServiceCard
        class="column"
        name="MTG Card Organizer"
        img-src="@/assets/app-tiles/mtg-card-organizer-tile.png"
      >
        Organize and sort Magic the Gathering&trade; cards into various collections,
        construct decks and track life totals during games.
      </AppServiceCard>

      <AppServiceCard
        class="column"
        name="Simple File Tagger"
        img-src="@/assets/app-tiles/simple-file-tagger.png"
      >
        A basic desktop application to tag files with dates and custom tags.
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
    margin: 15px;
    min-width: 30%;
  }
}
</style>
