import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/misc/registerServiceWorker';
import '@/misc/handleNetworkStatus';
import '@/misc/handleAppleInstallPrompt';
import '@/assets/scss/tailwind.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
