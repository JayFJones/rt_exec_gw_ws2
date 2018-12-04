import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueNativeSock, 'ws://localhost:9000')

new Vue({
  render: h => h(App),
}).$mount('#app')
