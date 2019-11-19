<template>
  <div class="home" id="main-container">
    <PrimarySection id="home"></PrimarySection>
    <SummarySection id="about-me"></SummarySection>
    <AppServiceSection id="apps-and-services"></AppServiceSection>
    <HistorySection id="history"></HistorySection>
    <ContactSection id="contact-me"></ContactSection>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import AppServiceSection from '../components/sections/AppServiceSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';
import FooterSection from '../components/sections/FooterSection.vue';
import HistorySection from '../components/sections/HistorySection.vue';
import PrimarySection from '../components/sections/PrimarySection.vue';
import SummarySection from '../components/sections/SummarySection.vue';

export default {
  components: {
    AppServiceSection,
    ContactSection,
    FooterSection,
    HistorySection,
    PrimarySection,
    SummarySection,
  },
}
</script>

<style scoped>
.home {
  width: 100%;
  scroll-behavior: smooth;
  overflow-y: auto;
}
</style>
