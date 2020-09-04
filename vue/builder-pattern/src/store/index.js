import Vue from "vue";
import Vuex from "vuex";
import formInputs from "./modules/formInputs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    formInputs,
  },
});
