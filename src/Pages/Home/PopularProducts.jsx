import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="mx-auto px-10">
      <h2 className="text-3xl font-semibold">Popular Products</h2>

      {/* <div className="flex space-x-6 border-b pb-2 pl-5 gap-6 text-gray-700 font-semibold">
        <button className="text-blue-600 border-b-2 border-blue-600">Fashion</button>
        <button className="hover:text-blue-600">Electronics</button>
        <button className="hover:text-blue-600">Bags</button>
        <button className="hover:text-blue-600">Footwear</button>
        <button className="hover:text-blue-600">Groceries</button>
        <button className="hover:text-blue-600">Beauty</button>
        <button className="hover:text-blue-600">Wellness</button>
        <button className="hover:text-blue-600">Jewellery</button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="bg-gray-100 flex justify-center items-center h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-52 object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>

            <div className="p-4">
              <p className="text-gray-500 text-sm">{product.category}</p>
              <h3 className="text-lg font-semibold truncate">{product.title}</h3>

              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < Math.round(product.rating.rate)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  ({product.rating.count})
                </span>
              </div>

              <div className="flex items-center mt-2">
                <p className="text-green-600 text-lg font-semibold">${product.price}</p>
                <p className="text-gray-400 line-through ml-2">
                  ${parseFloat(product.price * 1.2).toFixed(2)}
                </p>
              </div>
              <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-800 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
