// Import CSS styles
import "./assets/main.css";

// Import dependencies
import { createApp } from "vue"; // Vue library
import App from "./App.vue"; // Vue app component
import router from "./router"; // Vue router
import { createPinia } from "pinia"; // State management library

// Function to create the Vue app instance
function createVueApp() {
  const app = createApp(App); // Create the Vue app
  const store = createPinia(); // Create the Pinia store for state management

  app.use(router); // Use the Vue router plugin
  app.use(store); // Use the Pinia store plugin

  return app; // Return the created Vue app instance
}

// Create and mount the Vue app
createVueApp().mount("#app");
