import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
