import Swal from 'sweetalert2';
import { useAppContext } from "../../hooks/useAppContext";

export const TableProducts = () => {
  
  const { fetchAllProducts, removeProduct, state: {data} } = useAppContext();
    
    const onDeleteProductClick = (id) => {
      
      Swal.fire({
        title: 'Estas seguro que deseas eliminar el producto?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `No eliminar`,
        denyButtonColor: '#3085d6',
        confirmButtonColor: '#d33'
      }).then((result) => {
        if (result.isConfirmed) {
          
          const isProductDeleted = removeProduct(id);
          
          if(isProductDeleted) {
            
            Swal.fire({
              icon: 'success',
              title: 'Producto eliminado correctamente',
            })
            
            fetchAllProducts();
            
          }else {
            Swal.fire({
              icon: 'error',
              title: 'No se pudo eliminar el producto',
            })
          }
        }
      })
    }
    
    
  return (
    <div className="flex flex-col bg-lightGray mt-5 w-[85%] mb-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light lg:text-lg max-w-[1200px]">
              <thead className="border-b border-b-black font-medium">
                <tr>
                  <th
                    scope="col"
                    className="px-1 py-4 text-center"
                  >
                    Imagen
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-center"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-center"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-4 text-center"
                  >
                    Accion
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-black'>
                
                {
                    data.map((product, index) => (
                        // Usar product.id de key 
                        <tr className="text-center" key={index}> 
                            <td className="whitespace-nowrap px-1 py-4">
                                <img
                                className="w-28 h-28 block mx-auto aspect-square lg:h-36"
                                src={product.images[0]?.url}
                                alt={`product ${index} image`}
                                />
                            </td>
                            <td className="whitespace-wrap px-1 py-4 text-xs max-w-[120px] lg:text-base uppercase">
                                {product.name}
                            </td>
                            <td className="whitespace-nowrap px-1 py-4">${product.price.toLocaleString()}</td>
                            <td className="whitespace-nowrap px-1 py-4">
                                <button className='bg-red-600 p-2 rounded-md border-2 text-white hover:cursor-pointer hover:bg-red-800 transition-all duration-300 ease-in hover:opacity-100' onClick={() => onDeleteProductClick(product.id)}>Eliminar</button>
                            </td>
                            
                        </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
