import Vue from "vue";

import MiseEnPlace from "./../../lib/entry";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import themeConfig from "./theme";

Vue.config.productionTip = false;

Vue.use(MiseEnPlace, themeConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
