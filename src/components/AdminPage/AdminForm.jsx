import { useState } from 'react';
import { InputContainer } from './InputContainer';
import { fileUpload } from '../../helpers/fileUpload';
import { CloseXIcon } from '../icons/CloseXIcon';
import { TrashIcon } from '../icons/TrashIcon';
import { deleteFile } from '../../helpers/deleteFile';
import { SelectOptions } from './SelectOptions';
import { useAppContext } from '../../hooks/useAppContext';
import Swal from 'sweetalert2';

const initialFormValues = {
  name: '',
  brand: '',
  category: '',
  price: '',
  color: '',
  model: '',
  images: [],
  description: '',
}

export const AdminForm = () => {
  
  const { addProduct, state: {data} } = useAppContext()
  const [formValues, setFormValues] = useState(initialFormValues);

  const [isFileUploading, setIsFileUploading] = useState(false);

  const [imageModal, setImageModal] = useState({ isOpen: false, url: '' });

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onFileInputChange = async ({ target = [] }) => {
    const files = target.files;
    if (files.length === 0) return;

    setIsFileUploading(true);

    const filesUploadPromises = [];

    for (const file of files) {
      filesUploadPromises.push(fileUpload(file));
    }

    const imagesInfo = await Promise.all(filesUploadPromises);

    setFormValues({
      ...formValues,
      images: [...formValues.images, ...imagesInfo],
    });

    setIsFileUploading(false);
  };

  const onImageClick = imageUrl => {
    setImageModal({ isOpen: true, url: imageUrl });
  };

  const onDeleteImageClick = async (imageId, deleteToken) => {
    await deleteFile(deleteToken);

    setFormValues({ ...formValues, images: formValues.images.filter(image => image.id !== imageId) });
  };

  // TODO: Agregar validaciones

  const onFormSubmit = async (e) => {
    e.preventDefault();
    
    if(!data.find(product => product.name.toLowerCase() === formValues.name.toLowerCase())) {
    
    const isProductAdded = await addProduct(formValues);
    
    if(isProductAdded) {
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado correctamente',
      })
    }else {
      Swal.fire({
        icon: 'error',
        title: 'No se pudo agregar el producto',
      })
    }
    
  }else {
    
    Swal.fire({
      icon: 'error',
      title: 'Ya se encuentra un producto con el nombre ingresado',
    })
    
  }
    
    setFormValues(initialFormValues);
  };

  return (
    <form
      className="bg-mainYellow w-[80%] mx-auto px-4 py-8 rounded-md max-w-[500px] my-10 lg:max-w-[700px]"
      onSubmit={onFormSubmit}
    >
      <fieldset className="mb-4 text-center">
        <legend className="font-bold text-xl md:text-2xl">Agregar un nuevo producto</legend>
      </fieldset>

      {/* Name and brand */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:justify-center lg:gap-20">
        <InputContainer
          forLabel="name"
          textLabel="Nombre"
          inputClass="capitalize"
          typeInput="text"
          inputName="name"
          placeholder="Ingresa nombre"
          onChange={onInputChange}
          inputValue={formValues.name}
        />

        <div className="flex flex-col gap-3">
          <SelectOptions
            labelFor="brand"
            labelText="Marca"
            selectValue={formValues.brand}
            selectName="brand"
            onChange={onInputChange}
            defaultText="Seleccionar marca"
            options={[
              'fender',
              'audio-technica',
              'behringer',
              'boss',
              'casio',
              'cort',
              'ibanez',
              'korg',
              'krk',
              'nux',
              'pearl',
              'roland',
            ]}
          />

          <SelectOptions
            labelFor="category"
            labelText="Categoría"
            selectValue={formValues.category}
            selectName="category"
            onChange={onInputChange}
            defaultText="Seleccionar categoría"
            options={['instrumentos musicales', 'electrónica, audio y video', 'teclados']}
          />
        </div>
      </div>

      {/* Price and color */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:justify-center lg:gap-20">
        <InputContainer
          forLabel="price"
          textLabel="Precio"
          typeInput="number"
          placeholder="Ingresa el precio"
          onChange={onInputChange}
          inputValue={formValues.price}
          inputName="price"
        />

        <InputContainer
          forLabel="color"
          textLabel="Color"
          typeInput="text"
          placeholder="Ingresa el color"
          onChange={onInputChange}
          inputValue={formValues.color}
          inputName="color"
        />
      </div>

      {/* Model and image */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap lg:justify-center lg:gap-x-20">
        <InputContainer
          inputClass="uppercase placeholder:normal-case"
          forLabel="model"
          textLabel="Modelo"
          typeInput="text"
          placeholder="Ingresa el modelo"
          onChange={onInputChange}
          inputValue={formValues.model}
          inputName="model"
        />

        {isFileUploading ? (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-white mx-auto my-3"
            role="status"
          ></div>
        ) : (
          <InputContainer
            forLabel="image"
            textLabel="Imagen/es"
            typeInput="file"
            placeholder="Sube la imagen"
            onChange={onFileInputChange}
          />
        )}

        {formValues.images.length > 0 && (
          <div className='md:w-full'>
            {formValues.images.map((image, index) => (
              <div
                className="flex items-center justify-around my-5 md:justify-center md:gap-8"
                key={image.id}
              >
                <img
                  className="w-16 h-16 md:w-28 md:h-28 hover:cursor-pointer"
                  src={image.url}
                  alt={`${formValues.name}${index}`}
                  onClick={() => onImageClick(image.url)}
                />
                <TrashIcon
                  className="w-8 h-8 hover:cursor-pointer md:w-10 md:h-10"
                  viewBox="0 0 16 16"
                  fill="red"
                  onClick={() => onDeleteImageClick(image.id, image.deleteToken)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <InputContainer
        forLabel="description"
        textLabel="Descripción"
        typeInput="text"
        placeholder="Ingresa la descripción"
        onChange={onInputChange}
        inputName="description"
        inputValue={formValues.description}
      />

      <input
        className="bg-mainBlack text-white h-8 w-40 rounded-md mt-8 mx-auto block hover:cursor-pointer hover:bg-white hover:text-black md:h-10 md:text-base hover:border-lightGray hover:border-2 transition-all duration-300 ease-in hover:opacity-100"
        type="submit"
        value="Agregar producto"
      />

      {imageModal.isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/70 hover:cursor-pointer"
          onClick={() => setImageModal({ isOpen: false, url: '' })}
        >
          <CloseXIcon
            className="fixed top-[65%] left-[50%] translate-x-[-50%] w-12 h-12 lg:top-[75%]"
            fill="white"
            viewBox="0 0 16 16"
          />
          <img
            className="fixed w-[80%] h-[250px] top-[20%] left-[50%] translate-x-[-50%] md:h-[400px] md:w-[600px] select-none"
            src={imageModal.url}
            alt={`${formValues.name} image`}
          />
        </div>
      )}
      
    </form>
  );
};
