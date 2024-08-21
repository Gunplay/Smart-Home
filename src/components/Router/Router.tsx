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
    // children: [
    //   // {

    //   // },
    //   {
    //     path: 'sign-in',
    //     element: <SignIn />,
    //     // loader: ({ request }) =>
    //     //   fetch("/api/dashboard.json", {
    //     //     signal: request.signal,
    //     //   }),
    //   },
    //   {
    //     path: 'product-page',
    //     element: <ProductPage />,
    //   },
    //   {
    //     path: 'PageNotFound',
    //     element: <PageNotFound />,
    //   },
    // ],
  },
  {
    path: 'sign-in',
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
    path: '/product-page',
    element: <ProductPage />,
  },
  {
    path: 'PageNotFound',
    element: <PageNotFound />,
  },
]);
// const routes: RouteObject[] = [
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/register',
//     element: <Register />,
//   },
//   {
//     path: 'sign-in',
//     element: <SignIn />,
//   },
//   {
//     path: '/product-page/:id',
//     element: <ProductPage />,
//   },
//   {
//     path: '*', // This will match any route not matched by the above routes
//     element: <Page404 />,
//   },
// ];
