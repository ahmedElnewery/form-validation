import Vue from 'vue'
import App from './App.vue'
import validationPlugin from './plugins'
Vue.use(validationPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
