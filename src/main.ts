import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import './plugins/vee-validate'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  store,
  render: h => h(App)
})