import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { router } from './components/Router/Router';
// import { App } from './App';
import { RouterProvider } from 'react-router-dom';
import './css/style.css';
import { setupStore } from './redux/store';
// import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
