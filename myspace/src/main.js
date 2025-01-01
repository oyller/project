import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import router from "./router/route";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
