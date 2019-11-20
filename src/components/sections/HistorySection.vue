<template>
  <SectionTemplate>
    <template slot="title">History</template>
    <template slot="description">An overview of my experience</template>

    <div class="container">
      <div class="history-area">
        <HistoryNode end="top"
          date="April 2019"
          company="Lead Forensics">
          <span slot="description">
            I have been working at Lead Forensics for the past {{durationText(new Date(2019, 1, 1))}} as a Senior Software Developer.
            For the most part I have been contributing to the product Webeo, a SaaS website personalisation tool.
            I have had the opportunity to learn numerous up to date technologies, including microservices, Docker and data warehousing, whilst still making
            my mark using my existing skill set.
          </span>
          <template slot="images">
            <img src="@/assets/company-logos/lead-forensics.png" />
            <img src="@/assets/company-logos/webeo.png" />
          </template>     
        </HistoryNode>
        
        <HistoryNode
          date="July 2017"
          company="Serenity Holidays"
          :collapsed="true">
          <span slot="description">
            At this company I was in a project to rebuild a legacy system from the ground up.
            Taking on a leadership role within the team, I made significant contributions towards the project using up to date technology including .NET Core
            and Angular 2+.
          </span>
          <img slot="images" src="@/assets/company-logos/serenity-holidays.png" />
        </HistoryNode>
        
        <HistoryNode
          date="July 2015"
          company="Nxtera"
          :collapsed="true">
          <span slot="description">
            During my time here I was working on a multi platform software solution that monitors and tests different aspects of telephone systems and voice recorders.
            The primary language used throughout was C#.
            </span>
          <img slot="images" src="@/assets/company-logos/nxtera-at-verint.jpg" />
        </HistoryNode>
        
        <HistoryNode
          date="2014"
          company="Sony"
          :collapsed="true">
          <span slot="description">
            During my time here I was primarily fixing bugs on various projects relating to Sony's Media Backbone Conductor using Java, webMethods and Linux.
            One of the larger projects whilst there involved setting up an array of linux scripts that would fully deploy the application stack.
          </span>
          <img slot="images" src="@/assets/company-logos/sony.png" />
        </HistoryNode>
        
        <HistoryNode
          date="2013"
          company="Barclays"
          :collapsed="true">
          <span slot="description">
            My main role was to assist with both feature development and bug fixing and for the Windows Pingit mobile app which was hitting a 4.5/5 star rating on the app store.
            I received a lot of exposure to the testing, design and support aspects of the various applications as part of a large organization.
          </span>
          <img slot="images" src="@/assets/company-logos/barclays.png" />
        </HistoryNode>

        <HistoryNode
          date="2013"
          company="Training at FDM Group"
          :collapsed="true">
          <span slot="description">
            My development career began at this IT consultancy company, where I was initially trained in Java, SQL and Unix.
            I completed various training in the fundamental principles of working in the software development industry.
            I was placed onto an accelerated training program and successfully completed all the modules at the required grades.
          </span>
          <img slot="images" src="@/assets/company-logos/fdm.png" />
        </HistoryNode>

        <HistoryNode end="bottom"
          date="2010"
          company="University of Southampton"
          :collapsed="true">
          <span slot="description">
            I studied and acquired my Degree in Mathematics over the course of 3 years at this University.
          </span>
          <img slot="images" src="@/assets/company-logos/university-of-southampton.png" />
        </HistoryNode>
      </div>
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
  methods: {
    durationText(dateStarted) {
      const durationDifMs = Date.now() - dateStarted;
      var durationDate = new Date(durationDifMs);
      // Add months to round to nearest year
      durationDate.setMonth(durationDate.getMonth() + 6);
      const years = Math.abs(durationDate.getUTCFullYear() - 1970);      
      return years > 1 ? `${years} years` : 'year';
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}
.history-area {
  max-width: 1200px;
}
img {
  width: 150px;
}
@media only screen and (max-width: 992px) {
  .history-area {
    max-width: 100%;
  }
}
</style>