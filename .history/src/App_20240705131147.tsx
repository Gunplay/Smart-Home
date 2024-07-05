import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Router/Router';

export const App: FC = () => <RouterProvider router={router} />;
