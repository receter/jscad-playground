import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // set base for github pages
  base: "/jscad-playground/",
  plugins: [react()],
});
