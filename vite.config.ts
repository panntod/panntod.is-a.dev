import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  // Only needed if you want to proxy requests to the API
  server: {
    proxy: {
      "/api": {
        target: "https://panntod-spotify-readme.vercel.app",
        changeOrigin: true,
        secure: false
      }
    }
  }
});
