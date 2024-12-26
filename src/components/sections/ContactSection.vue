<template>
  <SectionTemplate
    title="Contact Me"
    description="Don't hesitate to send me a message"
  >
    <div class="container">
      <div class="content">
        <input
          v-model="subject"
          type="text"
          placeholder="Subject"
        >

        <textarea
          v-model="message"
          cols="40"
          rows="5"
          placeholder="Message"
        />

        <div class="send">
          <PageButton
            icon="send"
            @click="sendEmail"
          >
            Send Message
          </PageButton>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { encodedEmail } from '@/common/constants.ts';
import SectionTemplate from '@/components/controls/SectionTemplate.vue';
import PageButton from '@/components/controls/PageButton.vue';

const subject = ref('');
const message = ref('');

const sendEmail = () => {
  const email = encodedEmail;
  const encodedSubject = `subject=${encodeURIComponent(subject.value)}`;
  const encodedMessage = `body=${encodeURIComponent(message.value)}`;
  window.location.href = `mailto:${email}?${encodedSubject}&${encodedMessage}`;
};
</script>

<style scoped>
input[type=text], textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
}
.send {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.container {
  display: flex;
  align-items: center;
}
.content {
  max-width: 800px;
  width: 100%;
}
</style>
