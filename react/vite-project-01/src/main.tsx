// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Nosotros from './Nosotros'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <>
    <App />
    <Nosotros />
  </>
  // </StrictMode>,
)
