import Vue from 'vue';
import VTooltip from 'v-tooltip';

// Icons
import Icon from 'vue-awesome';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/chevron-down';
import 'vue-awesome/icons/balance-scale';

import App from './App.vue';

Vue.component('v-icon', Icon);

Vue.mixin({
  methods: {
    durationText: (dateStarted) => {
      const durationDifMs = Date.now() - dateStarted;
      const durationDate = new Date(durationDifMs);
      // Add months to round to nearest year
      durationDate.setMonth(durationDate.getMonth() + 6);
      const years = Math.abs(durationDate.getUTCFullYear() - 1970);
      return years > 1 ? `${years} years` : 'year';
    },
  },
});

Vue.use(VTooltip, { defaultDelay: 100 });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
