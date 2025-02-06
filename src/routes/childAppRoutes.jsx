import { Navigate } from 'react-router-dom';
import { Home, Admin, ProductDetail } from '../pages';

export const childAppRoutes = [
  {
    index: true,
    element: (
      <Navigate
        to="/home"
        replace={true}
      />
    ),
  },

  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'admin',
    element: <Admin />,
  },
  {
    path: 'product/:id',
    element: <ProductDetail />
    
  },
  {
    path: '*',
    element: (
      <Navigate
        to="/home"
        replace={true}
      />
    ),
  },
];
