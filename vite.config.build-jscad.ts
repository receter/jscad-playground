import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "public/bundle",
    emptyOutDir: false,
    lib: {
      entry: "./@jscad/modeling.js",
      name: "modeling",
      formats: ["es"],
      fileName: () => "@jscad/modeling.mjs",
    },
    rollupOptions: {
      // To make export * from "@jscad/modeling"; work
      // otherwise, you will get an empty chunk because of treeshaking
      treeshake: false,
    },
  },
});
