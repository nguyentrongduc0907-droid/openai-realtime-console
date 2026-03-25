import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

const path = fileURLToPath(import.meta.url);


export default defineConfig({
  // ... các cấu hình khác có sẵn của bạn ...
  server: {
    allowedHosts: [
      'openai-realtime-console-7tbt.onrender.com'
    ],
    // Hoặc nếu bạn muốn nhanh và dùng cho nhiều link khác sau này:
    // allowedHosts: true, 
  },
};
