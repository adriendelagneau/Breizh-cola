"use client";

import React from "react";

const ProductDescription = (params) => {
  return (
    <div className="flex items-center justify-center w-full h-screen p-20 text-6xl ">
      {params.description}
    </div>
  );
};

export default ProductDescription;
