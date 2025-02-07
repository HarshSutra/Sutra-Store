import React from "react";
import { assets } from "../../assets/assets";

const FeaturedCategories = () => {
  return (
    <div className="p-10">
    <div className="font-semibold text-3xl">
      Featured Categories
    </div>
    <div className="flex justify-center w-full items-center gap-40 mt-10">
      {/* <div className="w-full flex gap-25 mt-10"> */}
        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.mensFashion}
            alt="Fashion"
          />
          <span className="mt-2 text-lg font-medium">Men Fashion</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.fashion}
            alt="Fashion"
          />
          <span className="mt-2 text-lg font-medium">Womens Fashion</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 bg-fuchsia-300 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.bag}
            alt="Bags"
          />
          <span className="mt-2 text-lg font-medium">Bags</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.electronicss}
            alt="Electronics"
          />
          <span className="mt-2 text-lg font-medium">Electronics</span>
        </div>
        
        
        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 bg-fuchsia-300 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.jewellary}
            alt="Jewelry"
          />
          <span className="mt-2 text-lg font-medium">Jewelry</span>
        </div>
        
      </div>
    </div>

  );
};

export default FeaturedCategories;
