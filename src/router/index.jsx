import { createBrowserRouter } from 'react-router-dom'
import {App, Contact} from '../pages';
import { MainLayout } from '../layouts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <App />
        },
        {
            path: '/contact',
            element: <Contact />
        }
    ]
  }
]);

export {
    router
}