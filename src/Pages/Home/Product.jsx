// import { useEffect, useState, useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="container mx-auto px-6 py-4">
//       <h1 className="text-2xl font-semibold mb-4">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-64 object-cover rounded-md"
//             />
//             <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
//             <p className="text-gray-600 mt-2">{product.description.slice(0, 80)}...</p>
//             <p className="text-lg font-bold mt-4">${product.price}</p>
//             <button
//               className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;
