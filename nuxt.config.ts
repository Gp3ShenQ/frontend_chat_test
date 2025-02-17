// import tailwindcss from '@tailwindcss/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api': {
          // API 路由
          target: 'http://localhost:3000/', // 主要 Domain
          changeOrigin: true,
        },
      },
    },
  },
})
