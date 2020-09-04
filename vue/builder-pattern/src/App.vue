<template>
  <div id="app">
    <ValidationObserver v-slot="{ passes }">
      <FormBuilder form-method="makeUserSignIn" :validation-method="passes" />
    </ValidationObserver>
  </div>
</template>

<script>
import FormBuilder from "./components/FormBuilder";

export default {
  name: "App",
  components: {
    FormBuilder,
  },
};
</script>
