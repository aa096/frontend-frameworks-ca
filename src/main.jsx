import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Theme from './styles/theme.jsx'
import GlobalStyle from './styles/globalStyles.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <GlobalStyle/>
      <App />
    </Theme>
  </StrictMode>,
)