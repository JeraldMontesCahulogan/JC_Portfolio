/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/JC_Portfolio",
  server: {
    host: "0.0.0.0",
    port: 5173, // or any port you prefer
  },
});
