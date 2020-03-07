<template>
  <div class="home">
    <PrimarySection id="home"></PrimarySection>
    <SummarySection id="about-me"></SummarySection>
    <SkillsSection id="skills-and-technology"></SkillsSection>
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
import SkillsSection from '../components/sections/SkillsSection.vue';
import SummarySection from '../components/sections/SummarySection.vue';

export default {
  components: {
    AppServiceSection,
    ContactSection,
    FooterSection,
    HistorySection,
    PrimarySection,
    SkillsSection,
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
.home > :nth-child(2n) {
  background-color: rgb(240, 240, 240);
}
</style>
