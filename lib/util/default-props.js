import { validateSpacingScale } from "./validation";

export const getDefaultPadProp = (defaultVal = 0) => {
  return {
    type: String,
    default: null,
    validator: function(value) {
      return validateSpacingScale(value);
    }
  };
};

export const getDefaultAsProp = (element = "div") => {
  return {
    type: String,
    default: element
  };
};
