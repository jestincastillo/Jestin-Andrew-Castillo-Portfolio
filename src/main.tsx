import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/theme.css'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BASE_URL is "/" locally and "/<repo>/" on GitHub Pages (see vite.config.ts). */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
