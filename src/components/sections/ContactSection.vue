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
            icon="envelope"
            @click="sendEmail"
          >
            Send Message
          </PageButton>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '../controls/SectionTemplate.vue';
import PageButton from '../controls/PageButton.vue';

export default {
  components: {
    SectionTemplate,
    PageButton,
  },
  data: () => ({
    subject: '',
    message: '',
  }),
  methods: {
    sendEmail() {
      const email = atob('ancubG93dGhlckBob3RtYWlsLmNvLnVr');
      const subject = `subject=${encodeURIComponent(this.subject)}`;
      const message = `body=${encodeURIComponent(this.message)}`;
      window.location.href = `mailto:${email}?${subject}&${message}`;
    },
  },
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
