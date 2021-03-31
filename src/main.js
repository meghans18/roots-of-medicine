import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import VueResource from 'vue-resource'

require('./assets/css/iowaStyles.css')

Vue.use(VueResource)

Vue.http.options.root = 'https://dsps.lib.uiowa.edu/roots/wp-json/'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
