import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = ({ addToCart, removeFromCart, cartItemList }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product details...</p>;
  }

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

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <div className="flex gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-1/3 h-auto object-contain"
        />
        <div>
          <h2 className="text-3xl font-semibold">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-600 text-xl font-bold mt-4">
            ${product.price}
          </p>
          <div className="flex gap-4">
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
      </div>

      {cartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-80">
            <h3 className="text-lg font-semibold mb-4">Added to Cart</h3>
            <p>{product.title} has been added to your cart.</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => navigate("/cartItems")}
                className="bg-orange-500 text-white px-4 py-2 rounded-md mr-2"
              >
                View Cart
              </button>
              <button
                onClick={handleCloseCart}
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                ✖ Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
