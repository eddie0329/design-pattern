const getDefaultState = () => ({
  inputUsername: "",
  inputPassword: "",
});

const _getters = {};

// mutations types
export const SET_INPUT_USERNAME = "SET_INPUT_USERNAME";
export const SET_INPUT_PASSWORD = "SET_INPUT_PASSWORD";

const _mutations = {
  [SET_INPUT_USERNAME](state, username) {
    state.inputUsername = username;
  },
  [SET_INPUT_PASSWORD](state, password) {
    state.inputPassword = password;
  },
};

// actions types
export const SIGN_IN_USER = "SIGN_IN_USER";

const _actions = {
  [SIGN_IN_USER]({ commit }) {
    commit(SET_INPUT_USERNAME, "");
    commit(SET_INPUT_PASSWORD, "");
    console.log("HELLLO WORLD!!");
  },
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: _getters,
  mutations: _mutations,
  actions: _actions,
};
