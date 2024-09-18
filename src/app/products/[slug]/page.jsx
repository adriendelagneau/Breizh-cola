"use client";

import React, { useEffect, useState } from 'react'
import { productsDetails } from '@/utils/detailData';
import ProductTitle from '@/components/ProductTittle';




const page = ({params}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    // Find the product that matches the params.slug
    const product = productsDetails.find((p) => p.name === params.slug);
    setSelectedProduct(product);

    // Dynamically import the corresponding component
  
  }, [params.slug]);

      if (!selectedProduct) {
        return <div>Product not found</div>;
      }

    return (
        <div className={`min-h-[150vh]  bg-mainColor text-secondColor dark:bg-mainDarkColor dark:text-secondDarkColor`}>
            <ProductTitle name={selectedProduct.name} />
      
        </div>
  )
}

export default page
