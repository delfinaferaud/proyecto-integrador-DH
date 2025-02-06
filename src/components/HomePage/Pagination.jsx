import { useEffect } from 'react';
import { ArrowPagination } from './ArrowPagination';
import { DOTS, usePagination } from '../../hooks/usePagination';

export const Pagination = ({ currentPage, pageSize, totalCount, onPageChange, siblingCount }) => {
  const paginationRange =
    usePagination({
      totalCount,
      pageSize,
      siblingCount,
      currentPage,
    }) || '';

  //   If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < lastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <ul className="flex text-xs justify-center max-w-[300px] mx-auto xl:max-w-full min-w-[300px] lg:mt-20">
        {/* Left navigation arrow */}
        <ArrowPagination
          onClick={onPrevious}
          rotate={true}
          viewBox={'5 2 10 10'}
          currentPage={currentPage}
          disableNumber={1}
        />
        {paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                key={index}
                className="border-0 flex items-end mx-1 pb-1 max-w-[25px] dark:text-white select-none text-[white]">
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              className={`${pageNumber === currentPage ? 'bg-[#818181] text-[white]' : 'bg-[#fff]'} ${
                pageNumber !== DOTS && 'border-[1px]'
              } p-3 h-[25px] flex-grow text-center my-auto mx-1 flex items-center justify-center rounded-md max-w-[25px]  border-darkGray/20 hover:cursor-pointer md:h-10 md:mx-2 md:w-4 md:max-w-[150px] select-none`}
              key={index}
              onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <ArrowPagination
          onClick={onNext}
          rotate={false}
          viewBox={'5 4 10 10'}
          currentPage={currentPage}
          disableNumber={lastPage}
        />
      </ul>
    </>
  );
};