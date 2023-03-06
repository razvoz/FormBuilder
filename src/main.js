import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bulma/css/bulma.min.css';

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
