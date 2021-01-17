import Vue from 'vue';
import App from './App.vue';
import routes from "./imports/routes";
// We import JQuery
const $ = require('jquery');
// We declare it globally
window.$ = $;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router:routes,
}).$mount('#app');
