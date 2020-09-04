import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { rules } from "./vee-validator";

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
