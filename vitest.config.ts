import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Use jsdom to simulate a browser environment
    alias: {
      "~/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
