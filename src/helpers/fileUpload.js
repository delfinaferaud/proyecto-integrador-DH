import axios from 'axios';

export const fileUpload = async file => {
  if (!file) throw new Error('No hay archivo a subir');

  const cloudUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`;

  const formData = new FormData();

  formData.append('upload_preset', `${import.meta.env.VITE_PRESET_NAME}`);
  formData.append('file', file);

  try {
    const resp = await axios.post(cloudUrl,formData);
    
    const { status, data} = resp;
    
    if(status !== 200 ) throw new Error('No se pudo subir la imagen');
    
    return {
        id: data.asset_id,
        deleteToken: data.delete_token,
        url: data.secure_url
    };
    
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
