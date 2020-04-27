import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueFlashMessage from 'vue-flash-message';
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false;
Vue.filter('dateFilter', dateFilter);
Vue.use(Vuelidate);
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 5000,
    pauseOnInteract: true
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
