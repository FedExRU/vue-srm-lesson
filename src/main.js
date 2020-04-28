import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueFlashMessage from 'vue-flash-message';
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

/*
 * <<<<< Firebase start >>>>>
 */
import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');
/*
 * <<<<<< Firebase end >>>>>>
 */

Vue.config.productionTip = false;
Vue.filter('dateFilter', dateFilter);
Vue.use(Vuelidate);
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

firebase.initializeApp({
  apiKey: "AIzaSyCKr-bJefT73ioAfiwCgCdkF_SNPmC9WFA",
  authDomain: "vue-crm-fedexru.firebaseapp.com",
  databaseURL: "https://vue-crm-fedexru.firebaseio.com",
  projectId: "vue-crm-fedexru",
  storageBucket: "vue-crm-fedexru.appspot.com",
  messagingSenderId: "979536273429",
  appId: "1:979536273429:web:102cb760cf5dfa54fa2e1c",
  measurementId: "G-2M40RBT9PH"
});

/*
 * Mount app
 */
let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});


