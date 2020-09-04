<template>
  <div id="app">
    <FormBuilder formMethod="makeUserSignIn" />
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
