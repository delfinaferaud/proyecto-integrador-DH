import { useContext } from 'react';
import { ContextGlobal } from '../context/globalContext';
import axios from 'axios';

export const useAppContext = () => {
  const context = useContext(ContextGlobal);

  if (!context) {
    throw new Error(`There is no context.`);
  }

  const [state, dispatch] = context;
  const baseUrl = 'http://localhost:4000/products';
  
  const addProduct = async(product) => {
    try {
        dispatch({ type: 'START_LOADING' });
        
        const resp = await axios.post(baseUrl, product);
        
        dispatch({ type: 'ADD_PRODUCT', payload: resp.data });
        
        return resp.status === 201;
        
    } catch (error) {
        console.log(error);
        throw new Error('Server error. Try again later.');
    }finally{
        
        setTimeout(() => {
            dispatch({ type: 'FINISH_LOADING' });
          }, 1000);
        
    }
  }

  const fetchAllProducts = async () => {
    try {
      dispatch({ type: 'START_LOADING' });
      const { data } = await axios.get(baseUrl);
      dispatch({ type: 'FETCH_DATA', payload: data });
    } catch (error) {
      console.log(error);
      throw new Error('Server error. Try again later.');
    } finally {
      setTimeout(() => {
        dispatch({ type: 'FINISH_LOADING' });
      }, 1000);
    }
  };

  const fetchSingleProduct = async id => {
    try {
      dispatch({ type: 'START_LOADING' });
      const { data } = await axios.get(`${baseUrl}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Server error. Try again later.');
    } finally {
      setTimeout(() => {
        dispatch({ type: 'FINISH_LOADING' });
      }, 1000);
    }
  };


  const removeProduct = async id => {
    
    try {
        dispatch({ type: 'START_LOADING' });
        
        const resp = await axios.delete(`${baseUrl}/${id}`)
        
        dispatch({ type: 'DELETE_PRODUCT', payload: id });
        
        if(resp.status === 200) {
            const productToDelete = state.data.find(product => product.id === id);
            
            for(const image of productToDelete.images) {
                try {
                    
                    axios.post(`https://api.cloudinary.com/v1_1/soundstock/delete_by_token?token=${image.deleteToken}`)
                    
                } catch (error) {
                    
                    console.log(error)
                    throw new Error('Las imagenes no pudieron ser eliminadas')
                    
                }
            }
        }
        
        return resp.status === 200;
        
    } catch (error) {
        console.log(error);
      throw new Error('Server error. Try again later.');
        
    }
    
  };

  return {
    addProduct,
    dispatch,
    fetchAllProducts,
    fetchSingleProduct,
    removeProduct,
    state,
  };
};