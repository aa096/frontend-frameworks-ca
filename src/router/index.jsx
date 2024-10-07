import { createBrowserRouter } from 'react-router-dom'
import {App, Contact} from '../pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

export {
    router
}