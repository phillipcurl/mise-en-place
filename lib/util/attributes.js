export const extractThemeAttributes = attrs => {
  if (!Object.keys(attrs).length) {
    return { themedAttrs: {}, nativeAttrs: {} };
  } else {
    let themedAttrs = {};
    let nativeAttrs = {};
    Object.keys(attrs).forEach(curr => {
      if (curr.includes("theme-")) {
        themedAttrs[`${curr.substring(curr.indexOf("-") + 1)}`] = attrs[curr];
      } else if (curr === "css") {
        themedAttrs = { ...themedAttrs, ...attrs[curr] };
      } else {
        nativeAttrs[curr] = attrs[curr];
      }
    });
    return { themedAttrs, nativeAttrs };
  }
};
