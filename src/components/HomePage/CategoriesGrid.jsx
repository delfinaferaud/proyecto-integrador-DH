import { CategoryCard } from "./CategoryCard";


export const CategoriesGrid = () => (
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      <CategoryCard title="Instrumentos musicales" img="url(https://res.cloudinary.com/soundstock/image/upload/v1684441726/categoria-instrumentos_row5di.webp)" position="center" />
      <CategoryCard title="Electrónica, audio y video" img="url(https://res.cloudinary.com/soundstock/image/upload/v1684441726/categorias-electronica_siophu.jpg)" position="bottom" />
      <CategoryCard title="Teclados y pianos" img="url(https://res.cloudinary.com/soundstock/image/upload/v1684441726/categorias-teclado_gvifay.webp)" />
    </div>
  </div>
);

