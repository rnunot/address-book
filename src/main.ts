import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressBook,
  faBars,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/misc/registerServiceWorker';
import '@/misc/handleNetworkStatus';
import '@/misc/handleAppleInstallPrompt';
import '@/assets/scss/tailwind.scss';

library.add(faAddressBook);
library.add(faBars);
library.add(faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
