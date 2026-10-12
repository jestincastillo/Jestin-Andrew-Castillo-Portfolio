import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, normalizePath, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this site from a sub-path like https://<user>.github.io/<repo>/.
// The deploy workflow sets BASE_PATH automatically (e.g. "/portfolio/", or "/" for a
// <user>.github.io repo or a custom domain), so you never have to edit this by hand.
// Locally it falls back to "/" so `npm run dev` just works.
const base = process.env.BASE_PATH || '/'

// GitHub Pages doesn't know about client-side routes like /projects/longhorn-baja-racing,
// so a refresh on those URLs would 404. Copying index.html to 404.html makes GitHub
// serve the app for any unknown path, and React Router takes it from there.
function spaFallback(): Plugin {
  let outDir = 'dist'
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// Vite only live-updates code and styles. Files in public/ (your images, resume,
// etc.) are served as-is, so replacing one used to need a manual browser refresh.
// This reloads the page automatically whenever a file in public/ is added,
// replaced, or deleted while `npm run dev` is running.
function reloadOnPublicChange(): Plugin {
  return {
    name: 'reload-on-public-change',
    apply: 'serve',
    configureServer(server) {
      const publicDir = normalizePath(server.config.publicDir)
      const reload = (file: string) => {
        if (normalizePath(file).startsWith(`${publicDir}/`)) {
          server.ws.send({ type: 'full-reload' })
        }
      }
      server.watcher.on('add', reload)
      server.watcher.on('change', reload)
      server.watcher.on('unlink', reload)
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), spaFallback(), reloadOnPublicChange()],
  server: {
    // This project lives in OneDrive, which can hide file saves from the normal
    // file watcher. Polling checks for changes every 300 ms so Ctrl+S always
    // updates the browser.
    watch: { usePolling: true, interval: 300 },
  },
})
