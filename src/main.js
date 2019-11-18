import Vue from 'vue';
import App from './App.vue';
import Icon from 'vue-awesome/components/Icon';

// Icons
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/chevron-down';
import 'vue-awesome/icons/balance-scale';
 
Vue.config.productionTip = false;
Vue.component('v-icon', Icon);

new Vue({
  render: h => h(App)
}).$mount('#app');
