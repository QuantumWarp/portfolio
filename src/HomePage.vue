<template>
  <div
    id="main-home"
    class="home"
  >
    <PrimarySection id="home" />
    <SummarySection id="about-me" />
    <AppProjectSection id="apps-and-services" />
    <HistorySection id="history" />
    <ContactSection id="contact-me" />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import PrimarySection from '@/components/sections/PrimarySection.vue';
import SummarySection from '@/components/sections/SummarySection.vue';
import AppProjectSection from '@/components/sections/AppProjectSection.vue';
import HistorySection from '@/components/sections/HistorySection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import FooterSection from '@/components/sections/FooterSection.vue';
</script>

<style scoped>
.home {
  color: var(--color-text-primary);
  transition: color .2s;
  width: 100%;
  scroll-behavior: smooth;
  overflow-y: auto;
}
.home > :nth-child(2n + 1) {
  background-color: var(--color-background-alternate);
}
</style>
