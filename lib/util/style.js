import { validateSpacingScale } from "./validation";

const RESPONSIVE_SCALES = ["", "__sm", "__md", "__lg"];

// This is used to ensure that values passed to functions that generate
// responsive props are formatted correctly.
const parseValToArray = val => {
  if (Array.isArray(val)) {
    return val;
  } else {
    return Array(1).fill(val);
  }
};

const buildResponsiveScale1D = (prefix, values) => {
  const valuesLength = values.length;

  return RESPONSIVE_SCALES.map((breakpoint, index) => {
    return `--${prefix}${breakpoint}: ${
      index > valuesLength - 1 ? values[valuesLength - 1] : values[index]
    }`;
  });
};

const buildResponsiveSpaceScale1D = (prefix, space = ["0"]) => {
  const spaceLength = space.length;

  return RESPONSIVE_SCALES.map((breakpoint, index) => {
    return `--${prefix}${breakpoint}: ${getValueFromSpacingScale(
      index > spaceLength - 1 ? space[spaceLength - 1] : space[index]
    )}`;
  });
};

const buildResponsiveSpaceScale2D = (
  prefix,
  { spaceX = ["0"], spaceY = ["0"] }
) => {
  const spaceXLength = spaceX.length;
  const spaceYLength = spaceY.length;

  return RESPONSIVE_SCALES.map((breakpoint, index) => {
    return `--${prefix}${breakpoint}: ${getValueFromSpacingScale(
      index > spaceYLength - 1 ? spaceY[spaceYLength - 1] : spaceY[index]
    )} ${getValueFromSpacingScale(
      index > spaceXLength - 1 ? spaceX[spaceXLength - 1] : spaceX[index]
    )}`;
  });
};

export const getValueFromSpacingScale = value => {
  if (!validateSpacingScale(value)) {
    return "var(--s0)";
  } else {
    return `var(--s${value})`;
  }
};

/**
 * Returns an array of CSS custom properties for the defined padding values.
 * The properties are returned in the format `--PREFIX-pad`. Responsive values
 * are appended with `__sm`, `__md`, and `__lg`. If the padding values passed are
 * strings,
 *
 * @param  prefix
 * @param  pad
 * @param  padX=0
 * @param  padY=0}
 */
export const getPadValues = (
  prefix,
  { pad = null, padX = "0", padY = "0" }
) => {
  if (pad) {
    return buildResponsiveSpaceScale2D(`${prefix}-pad`, {
      spaceX: parseValToArray(pad),
      spaceY: parseValToArray(pad)
    }).join("; ");
  } else {
    return buildResponsiveSpaceScale2D(`${prefix}-pad`, {
      spaceX: parseValToArray(padX),
      spaceY: parseValToArray(padY)
    }).join("; ");
  }
};

export const getGapValues = (prefix, gap = "0") => {
  return buildResponsiveSpaceScale1D(
    `${prefix}-gap`,
    parseValToArray(gap)
  ).join("; ");
};

export const getResponsiveValues = (prefix, value) => {
  return buildResponsiveScale1D(prefix, parseValToArray(value)).join("; ");
};
