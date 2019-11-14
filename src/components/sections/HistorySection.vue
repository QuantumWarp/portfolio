<template>
  <SectionTemplate>
    <template slot="title">History</template>
    <template slot="description">An overview of my experience</template>

    <div>
      <HistoryNode
        date="April 2019"
        company="Lead Forensics">
        <span slot="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam purus tortor, facilisis at malesuada sed, condimentum non erat. Etiam vestibulum at ex in aliquet. Integer elementum, quam semper lacinia pharetra, massa eros facilisis turpis, eu blandit eros dolor non lectus. Duis sit amet viverra felis, eu pellentesque quam. Quisque ut eros vel tellus pharetra placerat. Donec sollicitudin augue in interdum sollicitudin. Duis felis massa, condimentum eu commodo ac, placerat vitae est.
        </span>
        <div slot="images">
          <img src="@/assets/company-logos/lead-forensics.png" />
          <img src="@/assets/company-logos/webeo.png" />
        </div>     
      </HistoryNode>
      
      <HistoryNode
        date="July 2017"
        company="Serenity Holidays">
        <span slot="description">
          Suspendisse eget enim tortor. Curabitur volutpat ac massa ut dapibus. Morbi a erat sed risus posuere pellentesque in in lacus. Donec ac diam at mauris ultrices tempus. Integer fringilla diam non urna faucibus suscipit. Nullam eu urna non odio condimentum feugiat. Nunc maximus sapien nunc, sit amet hendrerit odio convallis vel. Etiam ipsum magna, condimentum sed urna a, lacinia iaculis nisi. Curabitur consequat lectus urna, ut sodales neque gravida vel. Integer pellentesque commodo sapien, eu tempor risus interdum in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dolor at volutpat efficitur. In rhoncus congue dapibus.
        </span>
        <img slot="images" src="@/assets/company-logos/serenity-holidays.png" />
      </HistoryNode>
      
      <HistoryNode
        date="July 2015"
        company="Nxtera"
        :collapsed="true">
        <span slot="description">
          Nulla non sapien feugiat, pellentesque dui vitae, condimentum nunc. Quisque bibendum libero erat, nec tempus augue tristique ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere turpis, eget placerat odio dapibus eu. Duis sit amet quam sed justo faucibus rhoncus eget a arcu. Curabitur tincidunt neque magna, ut aliquam ante consequat vitae. Vestibulum non nunc elementum sem eleifend egestas. Quisque sem purus, vehicula sed mauris a, ornare dignissim neque. Mauris nec sapien in turpis euismod tempor vel ac massa. Duis vitae tellus et diam rhoncus imperdiet vitae a augue.
        </span>
        <img slot="images" src="@/assets/company-logos/nxtera-at-verint.jpg" />
      </HistoryNode>
      
      <HistoryNode
        date="2014"
        company="Sony"
        :collapsed="true">
        <span slot="description">
          Nulla non sapien feugiat, pellentesque dui vitae, condimentum nunc. Quisque bibendum libero erat, nec tempus augue tristique ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere turpis, eget placerat odio dapibus eu. Duis sit amet quam sed justo faucibus rhoncus eget a arcu. Curabitur tincidunt neque magna, ut aliquam ante consequat vitae. Vestibulum non nunc elementum sem eleifend egestas. Quisque sem purus, vehicula sed mauris a, ornare dignissim neque. Mauris nec sapien in turpis euismod tempor vel ac massa. Duis vitae tellus et diam rhoncus imperdiet vitae a augue.
        </span>
        <img slot="images" src="@/assets/company-logos/sony.png" />
      </HistoryNode>
      
      <HistoryNode
        date="2013"
        company="Barclays"
        :collapsed="true">
        <span slot="description">
          Nulla non sapien feugiat, pellentesque dui vitae, condimentum nunc. Quisque bibendum libero erat, nec tempus augue tristique ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere turpis, eget placerat odio dapibus eu. Duis sit amet quam sed justo faucibus rhoncus eget a arcu. Curabitur tincidunt neque magna, ut aliquam ante consequat vitae. Vestibulum non nunc elementum sem eleifend egestas. Quisque sem purus, vehicula sed mauris a, ornare dignissim neque. Mauris nec sapien in turpis euismod tempor vel ac massa. Duis vitae tellus et diam rhoncus imperdiet vitae a augue.
        </span>
        <img slot="images" src="@/assets/company-logos/barclays.png" />
      </HistoryNode>

      <HistoryNode
        date="2013"
        company="Training at FDM Group"
        :collapsed="true">
        <span slot="description">
          Nulla non sapien feugiat, pellentesque dui vitae, condimentum nunc. Quisque bibendum libero erat, nec tempus augue tristique ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere turpis, eget placerat odio dapibus eu. Duis sit amet quam sed justo faucibus rhoncus eget a arcu. Curabitur tincidunt neque magna, ut aliquam ante consequat vitae. Vestibulum non nunc elementum sem eleifend egestas. Quisque sem purus, vehicula sed mauris a, ornare dignissim neque. Mauris nec sapien in turpis euismod tempor vel ac massa. Duis vitae tellus et diam rhoncus imperdiet vitae a augue.
        </span>
        <img slot="images" src="@/assets/company-logos/fdm.png" />
      </HistoryNode>

      <HistoryNode
        date="2010"
        company="University of Southampton"
        :collapsed="true">
        <span slot="description">
          Nulla non sapien feugiat, pellentesque dui vitae, condimentum nunc. Quisque bibendum libero erat, nec tempus augue tristique ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat posuere turpis, eget placerat odio dapibus eu. Duis sit amet quam sed justo faucibus rhoncus eget a arcu. Curabitur tincidunt neque magna, ut aliquam ante consequat vitae. Vestibulum non nunc elementum sem eleifend egestas. Quisque sem purus, vehicula sed mauris a, ornare dignissim neque. Mauris nec sapien in turpis euismod tempor vel ac massa. Duis vitae tellus et diam rhoncus imperdiet vitae a augue.
        </span>
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