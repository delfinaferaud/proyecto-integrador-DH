import React, { useState, useEffect } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import { ProductCard } from "./ProductCard";
import { Pagination } from "./Pagination";



export const ProductGrid = () => {
  const { fetchAllProducts, state: {data} } = useAppContext();
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(3)
  const [productsToShow, setProductsToShow] = useState(data.slice(0, pageSize))
  const total = data.length;
  const siblingCount = 1;

  
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize()
    

    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWindowWidth])
  
  useEffect(() => {
    
    if(windowWidth <= 375) {
      setPageSize(3);
    }else if(windowWidth <= 768) {
      setPageSize(4);
    } else {
      setPageSize(10)
    }
    
  }, [windowWidth])
  
  
  
  useEffect(() => { 
    fetchAllProducts();
  }, [])
  


  useEffect(() => {
    setShuffledProducts([...data].sort(() => Math.random() - 0.5));
  }, [data]);
  
  useEffect(() => {
    
    if(currentPage === 1) {
      setProductsToShow(shuffledProducts.slice(0, pageSize))
    }else {
      setProductsToShow(shuffledProducts.slice((currentPage - 1) * pageSize,  ((currentPage - 1) * pageSize) + pageSize || shuffledProducts.length))
    }
  },[shuffledProducts,currentPage, pageSize])
  

  return (
    <>
    <div className="flex flex-wrap justify-around my-8">
      {productsToShow.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    
    <Pagination 
    
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={total}
        siblingCount={siblingCount}
        onPageChange={page => setCurrentPage(page)}
    
    />
  
    </>
  );
};

