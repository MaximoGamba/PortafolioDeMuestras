import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // El sitio se publica en https://maximogamba.github.io/PortafolioDeMuestras/,
  // por lo que los assets viven bajo el nombre del repositorio.
  base: '/PortafolioDeMuestras/',
  plugins: [react(), tailwindcss()],
})
