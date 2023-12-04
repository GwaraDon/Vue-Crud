import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Function to create the app instance
function createVueApp() {
  const app = createApp(App);
  const store = createPinia();

  app.use(router);
  app.use(store);

  return app;
}

// Create and mount the app
createVueApp().mount("#app");
