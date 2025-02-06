import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star } from "lucide-react";

const LimitedResults = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto py-10 pl-5 pr-5">
      <h2 className="text-2xl font-semibold mb-6">Limited Time Deals</h2>

      <Swiper 
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border p-4 rounded-lg shadow-md p-5 bg-white">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
              <div className="mt-4">
                <p className="text-gray-600 text-sm">{product.category}</p>
                <h3 className="font-medium text-gray-800 truncate">
                  {product.title}
                </h3>
                <div className="flex items-center space-x-1 text-yellow-500 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < Math.round(product.rating.rate) ? "gold" : "gray"} />
                  ))}
                </div>
                <p className="text-green-600 font-bold mt-2">Rs {product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LimitedResults;
