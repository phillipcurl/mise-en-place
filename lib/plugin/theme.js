import { get } from "@styled-system/core";
import system from "@styled-system/css";
import { css } from "emotion";

const DEFAULT_THEME_CONFIG = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#05a",
    accent: "#609",
    muted: "#f6f6f6f"
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["40em", "52em", "64em"],
  buttons: {
    primary: {
      color: "white",
      bg: "red"
    },
    secondary: {
      color: "white",
      bg: "tomato"
    }
  }
  // mediaQueries: {
  // 	small: `@media screen and (min-width: ${breakpoints[0]})`,
  // 	medium: `@media screen and (min-width: ${breakpoints[1]})`,
  // 	large: `@media screen and (min-width: ${breakpoints[2]})`
  // }
};

export default class Theme {
  constructor(options) {
    this.options = Object.assign({}, DEFAULT_THEME_CONFIG, options);

    // this.options = merge(DEFAULT_THEME_CONFIG, options);
    console.log("options: ", this.options);
  }

  css(styles) {
    return css(system(styles)(this.options));
  }

  get(key, fallback = null) {
    return get(this.options, key, fallback ? fallback : key);
  }

  // variant({
  // 	scale,
  // 	prop = 'variant',
  // 	// enables new api
  // 	variants = {},
  // 	// shim for v4 API
  // 	key
  // }) {
  // 	return system(get(this.options, scale, value))(
  // 		this.options
  // 	);
  // }
}
