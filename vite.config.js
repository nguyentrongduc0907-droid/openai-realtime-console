import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const path = fileURLToPath(import.meta.url);

export default defineConfig({
  // Giữ nguyên cấu hình cũ của bạn
  root: join(dirname(path), "client"),
  plugins: [react()],
  
  // Thêm phần này để sửa lỗi "Host not allowed"
  server: {
    allowedHosts: [
      'openai-realtime-console-7tbt.onrender.com'
    ]
  }
});
