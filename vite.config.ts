import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sassDts from "vite-plugin-sass-dts";
import * as path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sassDts()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
    },
  },
});
