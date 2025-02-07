import React, { useEffect, useState } from "react";

const categories = [
  { key: "electronics", label: "Electronics" },
  { key: "jewelery", label: "Jewelry" },
  { key: "men's clothing", label: "Men's Fashion" },
  { key: "women's clothing", label: "Women's Fashion" },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [selectedCategory]);

  const selectedCategoryLabel =
    categories.find((cat) => cat.key == selectedCategory)?.label || "Products";

  return (
    <div className="container p-10">
    {/* <div className="max-w-7xl mx-auto p-6"> */}
      <div className="bg-orange-100 rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          {selectedCategoryLabel}
        </h1>
        <nav className="text-gray-600 text-sm mt-2">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          
          <span className="ml-1 text-gray-900">{selectedCategoryLabel}</span>
        </nav>
      </div>

      <div className="flex gap-6">
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Category</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.key}
                className={`p-2 rounded-md cursor-pointer ${
                  selectedCategory == category.key
                    ? "bg-orange-200 font-semibold"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4">
          <h2 className="text-xl font-semibold mb-4">
            Showing results for: <span>{selectedCategoryLabel}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  />
                  <h3 className="text-md font-semibold mt-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-orange-600 font-bold mt-2">
                    Rs {product.price}
                  </p>
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