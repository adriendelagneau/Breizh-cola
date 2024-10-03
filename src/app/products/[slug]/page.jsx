"use client";

import React, { useEffect, useState } from 'react'
import { productsDetails } from '@/utils/data'; 
import ProductTitle from '@/components/ProductTittle';
// import ProductDescription from '@/components/ProductDescription';
import Ingredients from '@/components/Ingredients';

import Marquee from '@/components/Marquee';




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
      <div
      className="bg-secondColor transition-colors duration-500 min-h-[200vh] w-full"
    >
      <div id="single" className="w-full min-h-[200vh] relative">

        <ProductTitle name={selectedProduct.name} />
        {/* <ProductDescription description={selectedProduct.description} /> */}
        <Marquee />
        <Ingredients
            ingredients={selectedProduct.ingredients}
            nutritionel={selectedProduct.nutritionel}
            formats={selectedProduct.format}
          />
      </div>
    </div>
  )
}

export default page
