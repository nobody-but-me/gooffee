
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-tooltip/dist/react-tooltip.css'
import './styles/tooltip.css'
import './styles/index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
   </StrictMode>
)
