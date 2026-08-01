import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiKey =
    env.VITE_OPENAI_API_KEY ||
    "sk-ZYNE7WRI8MeQrTd3WW36agMxIx7cZYEET7qRvmD2e8AvQqFB";

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api/chat": {
          target: "https://api.tokenrouter.com/v1/chat/completions",
          changeOrigin: true,
          rewrite: () => "",
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              proxyReq.setHeader("Authorization", `Bearer ${apiKey}`);
            });
          },
        },
      },
    },
  };
});



