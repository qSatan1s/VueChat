import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import databaseRef from 'firebase/database';

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyBkaT7BLMBWKPnR1CBjaj7kgYxoYmF1EMo',
  authDomain: 'vuechat-1b248.firebaseapp.com',
  databaseURL: 'https://vuechat-1b248.firebaseio.com',
  projectId: 'vuechat-1b248',
  storageBucket: 'vuechat-1b248.appspot.com',
  messagingSenderId: '1015550882151',
  appId: '1:1015550882151:web:b4853839497e3ba9b83fc2',
  measurementId: 'G-NXYR9HQ33H',
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
