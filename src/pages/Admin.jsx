import { useEffect } from 'react';
import { AdminForm } from '../components/AdminPage/AdminForm';
import { TableProducts } from '../components/AdminPage/TableProducts';

import { useAppContext } from '../hooks/useAppContext';

export const Admin = () => {
  
  const { fetchAllProducts, state: {data} } = useAppContext();
  
  
  useEffect(() => { 
    fetchAllProducts();
  }, []);
  
  
  

  return (
    <div className="min-h-[calc(100vh_-_8.2rem)] md:min-h-[calc(100vh_-_9.2rem)] w-full bg-darkGray flex items-center gap-4 relative flex-col">
      <AdminForm/>
      
      {/* TODO: Agregar tabla para productos listados con boton para eliminar / modificar */}
      
      {
        data.length > 0 && <TableProducts />
      }
      
      
    </div>
  );
};
