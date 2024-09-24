// main-container/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-container",
      remotes: {
        recommendation: "http://localhost:5001/assets/remoteEntry.js",
        navbar: "http://localhost:5002/assets/remoteEntry.js",
        productDetail: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
