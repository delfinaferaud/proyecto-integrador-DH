import { PaginationArrowIcon } from '../icons/PaginationArrowIcon';

export const ArrowPagination = ({ onClick, rotate, viewBox, currentPage, disableNumber }) => {
  return (
    <li
      className="p-3 h-[32px] text-center my-auto mx-1 flex items-center hover:cursor-pointer w-full xl:m-0 xl:w-fit"
      onClick={onClick}>
      <PaginationArrowIcon
        className={`${currentPage === disableNumber ? 'fill-darkGray/20' : 'fill-darkGray'} ${
          rotate && 'rotate-180'
        } md:w-9 w-full h-[16px]`}
        viewBox={viewBox}
      />
    </li>
  );
};