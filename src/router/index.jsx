import { createBrowserRouter } from 'react-router-dom'
import { App } from '../pages';

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

export {
    router
}