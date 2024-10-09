import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr(), eslint()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
});
