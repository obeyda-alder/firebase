import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'



import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


Vue.config.productionTip = false


Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
