import Vue from 'vue';
import App from './App.vue';

// Icons
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/chevron-down';
import 'vue-awesome/icons/balance-scale';
Vue.component('v-icon', Icon);
 
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
