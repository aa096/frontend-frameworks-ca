import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './styles/index.css'
import Theme from './styles/theme.jsx'
import GlobalStyle from './styles/globalStyles.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <GlobalStyle/>
     <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
)