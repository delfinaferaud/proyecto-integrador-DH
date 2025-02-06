import axios from "axios"

export const addProduct = async(product) => {
    
   try {
    
    const resp = await axios.post('http://localhost:4000/products',product);
    
    if(resp.status !== 201) throw new Error('No se pudo crear el producto');
     
   } catch (error) {
    console.log(error)
    throw new Error(error.message)
   }
    
}