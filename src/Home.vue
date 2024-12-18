<template>
  <div
    id="main-home"
    class="home"
  >
    <PrimarySection id="home" />
    <SummarySection id="about-me" />
    <AppServiceSection id="apps-and-services" />
    <HistorySection id="history" />
    <ContactSection id="contact-me" />
    <FooterSection />
  </div>
</template>

<script setup>
import AppServiceSection from './components/sections/AppServiceSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import FooterSection from './components/sections/FooterSection.vue';
import HistorySection from './components/sections/HistorySection.vue';
import PrimarySection from './components/sections/PrimarySection.vue';
import SummarySection from './components/sections/SummarySection.vue';
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
