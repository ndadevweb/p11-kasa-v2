import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    ],
  },
]);
