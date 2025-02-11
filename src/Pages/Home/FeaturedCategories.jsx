import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const FeaturedCategories = () => {
  return (
    <div className="p-10">
      <div className="font-semibold text-3xl">Featured Categories</div>
      <div className="flex justify-center w-full items-center gap-40 mt-10">
        {/* <div className="w-full flex gap-25 mt-10"> */}
        <div className="flex flex-col items-center">
          <Link to={`/products/men's clothing`}>
            <img
              className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
              src={assets.mensFashion}
              alt="Fashion"
            />
          </Link>
          <span className="mt-2 text-lg font-medium">Men Fashion</span>
        </div>

        <div className="flex flex-col items-center">
          <Link to={`/products/women's clothing`}>
            <img
              className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
              src={assets.fashion}
              alt="Fashion"
            />
          </Link>
          <span className="mt-2 text-lg font-medium">Womens Fashion</span>
        </div>

        <div className="flex flex-col items-center">
          <Link to={`/products/electronics`}>
            <img
              className="h-30 w-30 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
              src={assets.electronicss}
              alt="Electronics"
            />
          </Link>
          <span className="mt-2 text-lg font-medium">Electronics</span>
        </div>

        <div className="flex flex-col items-center">
        <Link to={`/products/jewelery`}>
          <img
            className="h-30 w-30 bg-fuchsia-300 rounded-full object-cover object-center transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            src={assets.jewellary}
            alt="Jewelry"
          />
          </Link>
          <span className="mt-2 text-lg font-medium">Jewelry</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
