const themeConfig = {
  colors: {
    text: "#000",
    background: "#fff",
    // primary: "#07c",
    secondary: "#05a",
    muted: "#f6f6f6f",
    transparent: "transparent",

    black: "#000",
    white: "#fff",

    gray: {
      100: "#f7fafc",
      200: "#edf2f7",
      300: "#e2e8f0",
      400: "#cbd5e0",
      500: "#a0aec0",
      600: "#718096",
      700: "#4a5568",
      800: "#2d3748",
      900: "#1a202c"
    },
    red: {
      100: "#fff5f5",
      200: "#fed7d7",
      300: "#feb2b2",
      400: "#fc8181",
      500: "#f56565",
      600: "#e53e3e",
      700: "#c53030",
      800: "#9b2c2c",
      900: "#742a2a"
    },
    orange: {
      100: "#fffaf0",
      200: "#feebc8",
      300: "#fbd38d",
      400: "#f6ad55",
      500: "#ed8936",
      600: "#dd6b20",
      700: "#c05621",
      800: "#9c4221",
      900: "#7b341e"
    },
    yellow: {
      100: "#fffff0",
      200: "#fefcbf",
      300: "#faf089",
      400: "#f6e05e",
      500: "#ecc94b",
      600: "#d69e2e",
      700: "#b7791f",
      800: "#975a16",
      900: "#744210"
    },
    green: {
      100: "#f0fff4",
      200: "#c6f6d5",
      300: "#9ae6b4",
      400: "#68d391",
      500: "#48bb78",
      600: "#38a169",
      700: "#2f855a",
      800: "#276749",
      900: "#22543d"
    },
    teal: {
      100: "#e6fffa",
      200: "#b2f5ea",
      300: "#81e6d9",
      400: "#4fd1c5",
      500: "#38b2ac",
      600: "#319795",
      700: "#2c7a7b",
      800: "#285e61",
      900: "#234e52"
    },
    blue: {
      100: "#ebf8ff",
      200: "#bee3f8",
      300: "#90cdf4",
      400: "#63b3ed",
      500: "#4299e1",
      600: "#3182ce",
      700: "#2b6cb0",
      800: "#2c5282",
      900: "#2a4365"
    },
    indigo: {
      100: "#ebf4ff",
      200: "#c3dafe",
      300: "#a3bffa",
      400: "#7f9cf5",
      500: "#667eea",
      600: "#5a67d8",
      700: "#4c51bf",
      800: "#434190",
      900: "#3c366b"
    },
    purple: {
      100: "#faf5ff",
      200: "#e9d8fd",
      300: "#d6bcfa",
      400: "#b794f4",
      500: "#9f7aea",
      600: "#805ad5",
      700: "#6b46c1",
      800: "#553c9a",
      900: "#44337a"
    },
    pink: {
      100: "#fff5f7",
      200: "#fed7e2",
      300: "#fbb6ce",
      400: "#f687b3",
      500: "#ed64a6",
      600: "#d53f8c",
      700: "#b83280",
      800: "#97266d",
      900: "#702459"
    },
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
        secondary: "#09c",
        muted: "#111"
      },
      papaya: {
        // this color mode will fallback to the root color object
        // for values not defined here
        text: "#433",
        background: "papayawhip"
      }
    }
  },
  fonts: {
    body:
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    heading:
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    semi: 600,
    bold: 700,
    black: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.35
  },
  space: {
    "0": "0",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem"
  },
  breakpoints: ["40em", "52em", "64em"],
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px"
  },
  button: {
    // Base Styles applied to all button elements
    default: {
      py: "sm",
      px: "md",
      fontWeight: "semi",
      color: "white",
      bg: "primary",
      borderRadius: "default",
      cursor: "pointer",
      ":disabled": {
        cursor: "not-allowed",
        opacity: "0.7"
      }
    },
    primary: {
      color: "white",
      bg: "red"
    },
    outline: {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "primary",
      color: "primary",
      bg: "transparent",
      ":hover": {
        bg: "primary",
        color: "white"
      }
    }
  }
  // mediaQueries: {
  // 	small: `@media screen and (min-width: ${breakpoints[0]})`,
  // 	medium: `@media screen and (min-width: ${breakpoints[1]})`,
  // 	large: `@media screen and (min-width: ${breakpoints[2]})`
  // }
};
/**
 * Define theme aliases for convenience
 * NOTE: this is not required, and standard config can just be an
 * object passed during the instantiation of the plugin
 */
themeConfig.space.xs = themeConfig.space[1];
themeConfig.space.sm = themeConfig.space[2];
themeConfig.space.md = themeConfig.space[3];
themeConfig.space.lg = themeConfig.space[4];
themeConfig.colors.primary = themeConfig.colors.indigo["700"];

export default themeConfig;