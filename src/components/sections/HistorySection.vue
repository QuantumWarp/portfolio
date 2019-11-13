<template>
  <SectionTemplate>
    <template slot="title">History</template>
    <template slot="description">An overview of my experience</template>

    <div>
      <HistoryNode
        date="01-04-2019"
        company="Lead Forensics"
        link="">
        <span slot="description">
          I have worked at Lead Forensics for the past X months
        </span>
        <div slot="images">
          <img src="@/assets/company-logos/lead-forensics.png" />
          <img src="@/assets/company-logos/webeo.png" />
        </div>     
      </HistoryNode>
      
      <HistoryNode
        date="01-04-2019"
        company="Serenity Holidays"
        link="">
        <span slot="description">
          I have worked the holidays company
        </span>
        <img slot="images" src="@/assets/company-logos/serenity-holidays.png" />
      </HistoryNode>
      
      <HistoryNode
        date="01-04-2019"
        company="Nxtera"
        link="">
        <img slot="images" src="@/assets/company-logos/nxtera-at-verint.jpg" />
      </HistoryNode>
      
      <HistoryNode
        date="01-04-2019"
        company="Sony"
        link="">
        <img slot="images" src="@/assets/company-logos/sony.png" />
      </HistoryNode>
      
      <HistoryNode
        date="01-04-2019"
        company="Barclays"
        link="">
        <img slot="images" src="@/assets/company-logos/barclays.png" />
      </HistoryNode>

      <HistoryNode
        date="01-04-2019"
        company="Training at FDM Group"
        link="">
        <img slot="images" src="@/assets/company-logos/fdm.png" />
      </HistoryNode>

      <HistoryNode
        date="01-04-2019"
        company="University of Southampton"
        link="">
        <img slot="images" src="@/assets/company-logos/university-of-southampton.png" />
      </HistoryNode>
    </div>
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '../controls/SectionTemplate.vue';
import HistoryNode from '../controls/HistoryNode.vue';

export default {
  components: {
    HistoryNode,
    SectionTemplate,
  },
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
}
img {
  width: 150px;
}
</style>