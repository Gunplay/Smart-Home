import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import ProductPage from '../../pages/ProductPage';
import Register from '../Form/Register';
import SignIn from '../Form/SignIn';
import PageNotFound from '../Page404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
    // loader: ({ request }) =>
    //   fetch("/api/dashboard.json", {
    //     signal: request.signal,
    //   }),
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/product-page/:id',
    element: <ProductPage />,
  },
  {
    path: '/PageNotFound',
    element: <PageNotFound />,
  },
]);
