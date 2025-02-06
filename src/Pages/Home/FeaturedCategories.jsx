import React from "react";
import { assets } from "../../assets/assets";

const FeaturedCategories = () => {
  return (
    <div className="font-semibold text-3xl pl-12">
      Featured Categories
      <div className="container w-full flex gap-15 pl-8 mt-10">
        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.fashion}
            alt="Fashion"
          />
          <span className="mt-2 text-lg font-medium">Fashion</span>
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
            className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.beauty}
            alt="Beauty"
          />
          <span className="mt-2 text-lg font-medium">Beauty</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.wellness}
            alt="Wellness"
          />
          <span className="mt-2 text-lg font-medium">Wellness</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 bg-fuchsia-300 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.jewellary}
            alt="Jewelry"
          />
          <span className="mt-2 text-lg font-medium">Jewelry</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.grocery}
            alt="Grocery"
          />
          <span className="mt-2 text-lg font-medium">Grocery</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.furniture}
            alt="Furniture"
          />
          <span className="mt-2 text-lg font-medium">Furniture</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
