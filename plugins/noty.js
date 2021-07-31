// plugins/noty.js
import Vue from "vue";
import "vuejs-noty/dist/vuejs-noty.css";
import VueNoty from "vuejs-noty";

Vue.use(VueNoty, {
  timeout: 3000,
  progressBar: true,
  layout: "topRight"
});
