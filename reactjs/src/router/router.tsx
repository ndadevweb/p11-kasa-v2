import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Error from '../pages/Error/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        caseSensitive: true,
        element: <About />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
