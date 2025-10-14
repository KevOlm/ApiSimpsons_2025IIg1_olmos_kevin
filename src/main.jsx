import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRoute} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ApiSimpsons_2025IIg1_olmos_kevin">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
