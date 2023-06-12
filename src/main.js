import { createApp } from "vue";

import { store } from "./store/index";

import App from "./App.vue";
import "./theme/global.css";

const app = createApp(App);

app.use(store);
app.mount("#app");
