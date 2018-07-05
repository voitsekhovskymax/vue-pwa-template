import Vue from 'vue'

//plugins
import {router} from './router/index';

//components
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
