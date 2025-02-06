import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { childAppRoutes } from './routes/childAppRoutes';
import { ContextProvider } from './context/globalContext';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    children: childAppRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
