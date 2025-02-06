import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  
  const navigate = useNavigate();
  
  return (
    
    <div className="max-w-sm rounded overflow-hidden m-4 hover:cursor-pointer hover:shadow-lg w-[264px] h-[450px]" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="relative w-full h-64 overflow-hidden">
        <img className="w-full h-full object-contain object-center" src={product.images[0].url} alt={product.name} />
      </div>
      <div className="px-6 py-4">
      <p className="text-black text-xl md:text-left font-bold text-center">${product.price.toLocaleString()}</p>
        <div className="text-xl my-4 capitalize">{product.name}</div>
      </div>
    </div>
    
  )
    
};