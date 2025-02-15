import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Footer = lazy(() => import("./components/Footer"));
const ProductList = lazy(() =>
  import("./Pages/CategoriesPage/selectedCategoryPage")
);
const CartItems = lazy(() => import("./Pages/Cart/CartItems"));
const ProductDetail = lazy(() => import("./Pages/ProductDetails"));

function App() {
  const [cartItemList, setCartItemList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartItemList));
  }, [cartItemList]);

  const addToCart = (item) => {
    setCartItemList((prevCart) => {
      if (!prevCart.some((cartItem) => cartItem.id === item.id)) {
        return [...prevCart, item];
      }
      return prevCart;
    });
  };

  const removeFromCart = (id) => {
    setCartItemList((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItemList={cartItemList}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/products/:category"
            element={
              <ProductList
                addToCart={addToCart}
                cartItemList={cartItemList}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                cartItemList={cartItemList}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/cartItems"
            element={
              <CartItems
                cartItemList={cartItemList}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;