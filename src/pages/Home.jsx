import { useEffect } from 'react';
import { BenefitContainer } from '../components/HomePage/BenefitContainer';
import { BrandsCarousel } from '../components/HomePage/BrandsCarousel';
import { ProductGrid } from '../components/HomePage/ProductGrid';
import { CategoriesGrid } from '../components/HomePage/CategoriesGrid';
import { DevolutionIcon, EnvelopIcon, TruckIcon } from '../components/icons';
import { useAppContext } from '../hooks/useAppContext';


export const Home = () => {
  

  
  return (
    <div className="h-full flex flex-col">
      {/* Search section */}

      <section
        className="flex gap-8 flex-col items-center py-10 bg-darkGray"
        aria-label="search"
      >
        <h2 className="text-2xl font-bold text-white">Buscador</h2>
        <div className="w-full ">
          <input
            className="border-2 border-gray-300 px-2 py-1 focus:outline-none m-auto block rounded-md placeholder:text-xs w-[80%] max-w-[700px]"
            type="text"
            placeholder="Buscar instrumento, accesorios, marcas..."
          />
        </div>
      </section>

      {/* Brands section */}
      <section
        className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 bg-mainBlack"
        aria-label="brand"
      >
        <BrandsCarousel />
      </section>


  {/* Recommendations section */}
  <section
        className="py-20 text-center bg-white"
        aria-label="recommendations"
      >
        <h2 className="text-2xl font-bold ">Recomendaciones</h2>
        <ProductGrid/>
      </section>

      {/* Category section */}

      <section
        className="py-20 text-center bg-darkGray"
        aria-label="category"
      >
        <CategoriesGrid />
      </section>

    

      {/* Benefits section */}
      <section
        className="py-10 text-center bg-mainYellow flex flex-col items-center gap-8 md:flex-row md:justify-between md:px-8 md:py-16 lg:justify-around"
        aria-label="benefits"
      >
        <BenefitContainer text="Cuotas fijas">
          <EnvelopIcon
            className="w-[60px] md:w-[100px]"
            viewBox="-.5 0 17 15"
            fill="white"
          />
        </BenefitContainer>

        <BenefitContainer text="Envíos gratis">
          <TruckIcon
            className="w-[60px] md:w-[100px]"
            viewBox="-.5 0 17 15"
            fill="white"
          />
        </BenefitContainer>

        <BenefitContainer text="Cambios y devoluciones">
          <DevolutionIcon
            className="w-[60px] md:w-[100px]"
            viewBox="-.5 0 17 15"
            fill="white"
          />
        </BenefitContainer>
      </section>
    </div>
  );
};
