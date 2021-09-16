import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueSweetalert2);
