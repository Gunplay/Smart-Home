import { RouterProvider } from 'react-router-dom';
import Router from './components/Router/Router';
import { Home, Register, SignIn } from './pages/index';

export const App = () => <RouterProvider router={router} />;
