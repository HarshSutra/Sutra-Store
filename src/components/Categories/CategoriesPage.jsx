import React, { useEffect, useState } from 'react';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-2xl font-semibold mb-4">All Categories</h1>
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li key={index} className="text-lg">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
