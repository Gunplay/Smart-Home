import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './components/Router/Router';

export const App: FC = () => <RouterProvider router={routes} />;
