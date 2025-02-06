import axios from "axios";

export const deleteFile = async (token) => {
  
  if(!token) throw new Error('No hay token');
  
  const cloudUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/delete_by_token?token=${token}`
  
  try {
    
    const {status} = await axios.post(cloudUrl);
    
    if(status !== 200) throw new Error('No se pudo eliminar la imagen');
    
    
    return true;
    
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
  
  
  
  
}
