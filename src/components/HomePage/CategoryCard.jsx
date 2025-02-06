export const CategoryCard = ({title, img, position}) => {
  return (
    <div className="flex flex-col justify-end h-64 p-4 object-contain hover:cursor-pointer" style={{backgroundImage: img, backgroundPosition: position, backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
    <h2 className="text-xl font-bold text-white">{title}</h2>
  </div>
  )
}
