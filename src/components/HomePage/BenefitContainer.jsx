export const BenefitContainer = ({children, text}) => {
  return (
    <div className="text-center flex flex-col items-center gap-2 md:w-[200px] md:h-[150px]">
        {children}
    <h3 className="text-lg md:text-2xl font-bold text-white">{text}</h3>
  </div>
  )
}
