import Vue from 'vue'
import App from './App.vue'
// vuex的实例
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
