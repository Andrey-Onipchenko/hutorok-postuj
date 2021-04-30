import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import excel from "vue-excel-export";
import Maska from "maska";
import VueGtag from "vue-gtag-next";

createApp(App)
  .use(store)
  .use(router)
  .use(excel)
  .use(Maska)
  .use(VueGtag, {
    property: {
      id: "UA-53317131-3"
    }
  })
  .mount("#app");
