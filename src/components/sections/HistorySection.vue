<template>
  <SectionTemplate>
    <template slot="title">History</template>
    <template slot="description">My job experience</template>

    <div>
      <div class="item" v-for="item in history" :key="item.company">
        <div>{{ item.date }}</div>
        <div class="divider"></div>
        <div class="content">
          <div>{{ item.company }}</div>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '../controls/SectionTemplate.vue';

export default {
  components: {
    SectionTemplate,
  },
  data: () => ({
    history: [
      {
        date: '01-04-2019',
        company: 'Lead Forensics',
        img: '',
        link: '',
        description: ''
      },
      {
        date: '01-04-2019',
        company: 'Serenity Holidays',
        img: '',
        link: '',
        description: ''
      },
      {
        date: '01-04-2019',
        company: 'Nxtera',
        img: '',
        link: '',
        description: ''
      },
      {
        date: '01-04-2019',
        company: 'Sony',
        img: '',
        link: '',
        description: ''
      },
      {
        date: '01-04-2019',
        company: 'Barclays',
        img: '',
        link: '',
        description: ''
      },
    ],
  }),
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
}
</style>