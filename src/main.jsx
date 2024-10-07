import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Theme from './styles/theme.jsx'
import GlobalStyle from './styles/globalStyles.jsx'
import { router } from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <GlobalStyle/>
     <RouterProvider router ={router} />
    </Theme>
  </StrictMode>,
)