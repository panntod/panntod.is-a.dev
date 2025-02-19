import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "https://panntod-spotify-readme.vercel.app/api",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
});
