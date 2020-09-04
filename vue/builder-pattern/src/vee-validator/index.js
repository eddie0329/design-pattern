import { required, min, max } from "vee-validate/dist/rules";

export const rules = {
  required: { ...required, message: (fieldName) => `${fieldName} is required` },
  min: {
    ...min,
    message: (fieldName, placeholders) =>
      `${fieldName} should be at least ${placeholders.length}`,
  },
  max: {
    ...max,
    message: (fieldName, placeholders) =>
      `${fieldName} should be under ${parseInt(placeholders.length, 10) + 1}`,
  },
};
