export const validateSpacingScale = val => {
  const scale = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (Array.isArray(val)) {
    return val.some(curr => scale.indexOf(curr) !== -1);
  } else {
    return scale.indexOf(val) !== -1;
  }
};
