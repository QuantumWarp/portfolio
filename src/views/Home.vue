<template>
  <div class="home">
    <PrimarySection id="home"></PrimarySection>
    <SummarySection id="about-me"></SummarySection>
    <AppSection id="apps-and-services"></AppSection>
    <HistorySection id="history"></HistorySection>
    <ContactSection id="contact-me"></ContactSection>
  </div>
</template>

<script>
import AppSection from '../components/sections/AppSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';
import HistorySection from '../components/sections/HistorySection.vue';
import PrimarySection from '../components/sections/PrimarySection.vue';
import SummarySection from '../components/sections/SummarySection.vue';

export default {
  components: {
    AppSection,
    ContactSection,
    HistorySection,
    PrimarySection,
    SummarySection,
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  scroll-behavior: smooth;
  overflow-y: auto;
}
</style>
