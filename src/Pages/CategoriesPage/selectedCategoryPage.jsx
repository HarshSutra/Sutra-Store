import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const categories = [
  { key: "electronics", label: "Electronics" },
  { key: "jewelery", label: "Jewelry" },
  { key: "men's clothing", label: "Men's Fashion" },
  { key: "women's clothing", label: "Women's Fashion" },
];

const ProductList = ({ addToCart, removeFromCart, cartItemList }) => {
  let { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [category]);

  const selectedCategoryLabel =
    categories.find((cat) => cat.key === category)?.label || "Products";

  const handleAddToCart = (product) => {
    if (cartItemList.some((item) => item.id === product.id)) {
      removeFromCart(product.id); 
    } else {
      addToCart(product);
    }
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate("/cartItems");
  };

  return (
    <div className="p-10">
      <div className="bg-orange-100 rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          {selectedCategoryLabel}
        </h1>
        <nav className="text-gray-600 text-sm mt-2">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="ml-1 text-gray-900">{selectedCategoryLabel}</span>
        </nav>
      </div>

      <div className="flex gap-6">
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <Link to={`/products/${cat.key}`} key={cat.key}>
                <li
                  className={`p-2 rounded-md cursor-pointer ${
                    category === cat.key
                      ? "bg-orange-200 font-semibold"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="w-3/4">
          <h2 className="text-xl font-semibold mb-4">
            Showing results for: <span>{selectedCategoryLabel}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-nowrap">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  <h3 className="text-md font-semibold mt-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-orange-600 font-bold mt-2">
                    Rs {product.price}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-4 w-40 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-700 transition"
                    >
                      {cartItemList.some((item) => item.id === product.id)
                        ? "Remove from Cart"
                        : "Add to Cart"}
                    </button>
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="mt-4 w-30 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-700 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
