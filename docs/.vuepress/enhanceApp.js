// const MiseEnPlace = require("./../../dist/mise-en-place.min");
import * as components from './../../src/lib';

export default ({ Vue, isServer }) => {
  // Vue.use(MiseEnPlace);
  Object.keys(components).forEach(componentName => {
    Vue.component(componentName, components[componentName]);
  });
};
