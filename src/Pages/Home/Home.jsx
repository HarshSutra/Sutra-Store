import React from "react";
import Banner from "./Banner";
import FeaturedCategories from "./FeaturedCategories";
import PopularProducts from "./PopularProducts";
import LimitedResults from "./LimitedResults";

const Home = ({ cartItemList, addToCart, removeFromCart }) => {
  return (
    <div>
      <Banner />
      <FeaturedCategories />
      <PopularProducts
        addToCart={addToCart}
        cartItemList={cartItemList}
        removeFromCart={removeFromCart}
      />
      <LimitedResults />
      
    </div>
  );
};

export default Home;
