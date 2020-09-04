<script>
import { mapState, mapMutations, mapActions } from "vuex";
import {
  SET_INPUT_USERNAME,
  SET_INPUT_PASSWORD,
  SIGN_IN_USER,
} from "../store/modules/formInputs";
import { FormDirector, FormBuilder } from "../builder/FormBuilder";

export default {
  props: ["formMethod"],
  computed: {
    ...mapState("formInputs", ["inputUsername", "inputPassword"]),
    getSubmitTypesFunc() {
      const submitTypes = {
        makeUserSignIn: () => this.signinUser,
      };
      return submitTypes[this.formMethod]();
    },
    _inputUsername: {
      get() {
        return this.inputUsername;
      },
      set(username) {
        this.setInputUserName(username);
      },
    },
    _inputPassword: {
      get() {
        return this.inputPassword;
      },
      set(password) {
        this.setInputPassword(password);
      },
    },
  },
  methods: {
    ...mapMutations("formInputs", {
      setInputUserName: SET_INPUT_USERNAME,
      setInputPassword: SET_INPUT_PASSWORD,
    }),
    ...mapActions("formInputs", {
      signinUser: SIGN_IN_USER,
    }),
  },
  render(h) {
    const self = this;
    const director = new FormDirector();
    const builder = new FormBuilder(h, self);
    director[this.formMethod](builder);
    return builder.getForm(this.getSubmitTypesFunc);
  },
};
</script>