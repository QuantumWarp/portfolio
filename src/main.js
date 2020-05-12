import Vue from 'vue';
import VTooltip from 'v-tooltip';

// Icons
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/chevron-down';
import 'vue-awesome/icons/balance-scale';

import App from './App.vue';

Vue.component('v-icon', Icon);

Vue.use(VTooltip, { defaultDelay: 100 });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
