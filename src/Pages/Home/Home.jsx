import React from "react";
import Banner from "./Banner";
import FeaturedCategories from "./FeaturedCategories";
import PopularProducts from "./PopularProducts";
import LimitedResults from "./LimitedResults";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedCategories />
      <PopularProducts />
      <LimitedResults />
    </div>
  );
};

export default Home;
