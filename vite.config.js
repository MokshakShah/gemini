import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/MiniGemini/', // ✅ must match GitHub repo name exactly
    define: {
      'process.env': env,
      'import.meta.env': JSON.stringify(env),
    },
    plugins: [react()],
  };
});
