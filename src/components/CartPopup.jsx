import React from "react";

const CartPopup = ({ isOpen, onClose, cartData }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl mb-4 text-orange-600">Your Cart</h2>

        {cartData.length > 0 ? (
          <ul>
            {cartData.map((cart, index) => (
              <li key={index} className="border-b py-2">
                <div>
                  <label className="text-3xl">Cart Id: {cart.id}</label> 
                  <br />
                </div>
                <strong>Cart ID:</strong> {cart.id} <br />
                <strong>User ID:</strong> {cart.userId} <br />
                <strong>Date:</strong> {cart.date} <br />
                <strong>Products:</strong>
                <ul className="ml-4 list-disc">
                  {cart.products.map((product, idx) => (
                    <li key={idx}>
                      Product ID: {product.productId}, Quantity:{" "}
                      {product.quantity}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in cart.</p>
        )}

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartPopup;