import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from "firebase/app";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAtr-4dLrXKXayFW4HdxK0lE1AR6a8U0wo",
  authDomain: "mollywebsite-e8b41.firebaseapp.com",
  databaseURL: "https://mollywebsite-e8b41.firebaseio.com",
  projectId: "mollywebsite-e8b41",
  storageBucket: "mollywebsite-e8b41.appspot.com",
  messagingSenderId: "1004866481760",
  appId: "1:1004866481760:web:22773007700968dc8d5d05",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  BootstrapVue,
  firebase,
  render: (h) => h(App),
}).$mount("#app");
