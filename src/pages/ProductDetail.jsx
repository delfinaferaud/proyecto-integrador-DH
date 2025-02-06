import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '../components/icons';
import { useAppContext } from '../hooks/useAppContext';

const initialValue = {
brand: "",
category: "",
color: "",
description: "",
id: "",
images:[],
model: "",
name: "",
price: "",
}

export const ProductDetail = () => {

  const {id} = useParams();
  const {fetchSingleProduct} = useAppContext();
  const [productToShow, setProductToShow] = useState(initialValue)
  const [activeImage, setActiveImage] = useState(productToShow.images[0]?.url);
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigate = useNavigate();
  
  useEffect(() => {
    
    const getProduct = async () => {
      
      const product = await fetchSingleProduct(id);
      
      setProductToShow(product)
      setActiveImage(product.images[0].url)
      
    }
    
    getProduct();
    
  }, [])
  
  
  

  const onImageClick = (imageUrl, index) => {
    setActiveImage(imageUrl);
    setCurrentIndex(index + 1);
  };

  return (
    <div className="min-h-[calc(100vh_-_8.2rem)] md:min-h-[calc(100vh_-_9.2rem)] w-full bg-white relative">
      <ArrowBack
        className="absolute right-5 w-16 h-10 top-3 md:w-24 md:h-10 hover:cursor-pointer"
        viewBox="0 0 15 15"
        onClick={() => navigate(-1)}
      />
      <div className="px-4 py-10 lg:flex lg:items-center lg:py-28 lg:gap-10">
        <div>
          <h2 className="font-bold text-2xl my-10 md:text-4xl md:mt-8 md:mb-16 lg:text-center lg:text-5xl lg:hidden uppercase">
            {productToShow.name}
          </h2>

          <div className="images-container md:flex md:flex-row-reverse md:justify-end md:h-fit md:my-10 lg:flex-row-reverse">
            {/* Selected image */}

            <div className="relative md:flex-grow max-w-[500px] md:ml-10 lg:mx-auto lg:w-[500px]">
              <span className="absolute bg-darkGray/70 px-2 rounded-md text-white text-sm md:right-5 md:px-3 md:text-sm">{`${currentIndex}/${productToShow.images.length}`}</span>
              <figure>
                <img
                  className="w-full h-auto max-h-[300px] object-contain md:max-h-[340px] lg:max-w-[600px] lg:max-h-[400px]"
                  src={activeImage}
                  alt="auris photo"
                />
              </figure>
            </div>

            {/* Gallery images */}

            <div
              className={`${
                productToShow.images?.length < 3 ? 'justify-evenly' : 'justify-between'
              } flex my-8 max-h-[340px] md:flex-col md:gap-5 md:my-0 md:w-32 md:items-center md:justify-center lg:flex-col lg:mx-auto lg:my-8 lg:w-[200px]`}
            >
              {productToShow.images?.map((image, index) => (
                // Usar id de key
                <figure
                className='hover:cursor-pointer'
                  onClick={() => onImageClick(image.url, index)}
                  key={image?.id}
                >
                  <img
                    className={`${
                      activeImage === image ? 'border-mainYellow' : 'border-darkGray/20'
                    } w-20 h-20 border-2 rounded-sm lg:w-28 lg:h-28`}
                    src={`${image.url}`}
                    alt={`${productToShow.name} image ${index + 1}/${productToShow.images.length}`}
                  />
                </figure>
              ))}
            </div>
          </div>

      
        </div>

        <div className='flex flex-col gap-12'>
        <h2 className="hidden font-bold lg:text-center lg:text-5xl lg:inline-block uppercase">
            {productToShow.name}
          </h2>
        <span className="font-semibold text-lg md:text-2xl">${productToShow.price.toLocaleString()}</span>
          <h3 className="font-semibold text-lg md:text-2xl">Descripción</h3>
          <p className="md:text-lg">
            {productToShow.description}
          </p>
        </div>
      </div>
    </div>
  );
};
