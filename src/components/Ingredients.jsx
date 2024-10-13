import React from "react";

import Nutritionel from "./Nutritionel";




const Ingredients = ({ ingredients, nutritionel}) => {
  return (
    <div className="flex w-full h-screen px-20">
      <div className="flex flex-col justify-center w-1/2 gap-12 text-xl">
        <div>
          <h3 className="mb-12 text-3xl font-poppins">Ingrédients:</h3>
          <p className="text-2xl font-bold">{ingredients}</p>
        </div>
        <Nutritionel nutritionel={nutritionel} />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Ingredients;
