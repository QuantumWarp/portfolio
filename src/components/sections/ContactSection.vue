<template>
  <SectionTemplate :shaded="true">
    <template slot="title">Contact Me</template>
    <template slot="description">Don't hesitate to send me a message</template>

    <input type="text" placeholder="Subject" v-model="subject" />

    <textarea cols="40" rows="5" placeholder="Message" v-model="message"></textarea>

    <div class="send">
      <PageButton icon="envelope" @click="sendEmail">
        Send Message
      </PageButton>
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
}
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
</style>
