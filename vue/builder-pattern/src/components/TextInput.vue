<template>
  <ValidationProvider :rules="rules" v-slot="{ errors }">
    <input v-model="innerValue" :type="type" :name="name" :placeholder="placeholder" />
    <span>{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
export default {
  data: () => ({
    innerValue: "",
  }),
  props: {
    inputValue: {
      type: String,
      default: "",
    },
    rules: {
      type: [Object, String],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
  },
  watch: {
    innerValue(value) {
      this.$emit("input", value);
    },
    inputValue(val) {
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    },
  },
};
</script>
