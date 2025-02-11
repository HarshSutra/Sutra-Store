import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer";
// import CategoriesPage from "./components/Categories/CategoriesPage";
import ProductList from "./Pages/CategoriesPage/selectedCategoryPage";

function App() {
  const [count, setCount] = useState(0);
  const [userId , setUserId] = useState("")
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exacts={true} element={<Home />}></Route>
          <Route path="/products/:category" element={<ProductList />} />
          {/* <Route path="/products/:category" element={<ProductList />} /> */}
          {/* <Route path="/categories" element={<CategoriesPage />} />  */}
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
