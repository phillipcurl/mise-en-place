// const MiseEnPlace = require("./../../dist/mise-en-place.min");
import * as components from './../../lib/components';

export default ({ Vue, isServer }) => {
  // Vue.use(MiseEnPlace);
  Object.keys(components).forEach(componentName => {
    Vue.component(componentName, components[componentName]);
  });
};
