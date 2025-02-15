import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Header = (cartCount) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search, products]);

  const handleSelectProduct = (productId) => {
    setSearch("");
    setFilteredProducts([]);
    navigate(`/product/${productId}`);
  };

  return (
    <div className="bg-white shadow-md py-3">
      <div className="mx-auto flex justify-between items-center px-10">
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <img src={assets.logo} alt="Logo" className="h-15" />
          </Link>
        </div>

        <div className="relative flex-1 mx-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for items..."
            className="w-[80%] h-9 p-2 border rounded-md focus:outline-none"
          />
          {filteredProducts.length > 0 && (
            <ul className="absolute top-10 left-0 w-[80%] bg-white border shadow-lg rounded-md z-50">
              {filteredProducts.slice(0, 5).map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleSelectProduct(product.id)}
                  className="p-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-8 h-8 object-contain"
                  />
                  {product.title}
                </li>  
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center space-x-6 gap-4">
          {/* <Link to="/" className="text-xl font-bold">
            MyStore
          </Link> */}
          <Link to="/cartItems" className="relative">
            Cart 🛒
            {cartCount > 0 && (
              <span className="ml-2 px-2 bg-red-500 rounded-full text-sm">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <nav className="bg-gray-100 py-2 h-10">
        <div className="mx-auto flex justify-center space-x-6 gap-10">
          <Menu>
            <MenuHandler>
              <Button className="bg-orange-500 w-60 h-8 justify-center p-2">
                Browse All Categories
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Link to="/products/jewelery">Jewelry</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products/electronics">Electronics</Link>
              </MenuItem>
              <Menu placement="right-start">
                <MenuHandler className="flex items-center justify-between">
                  <MenuItem>
                    Clothing
                    <ChevronRightIcon
                      strokeWidth={2.5}
                      className="h-3.5 w-3.5"
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem>
                    <Link to="/products/men's clothing">Men's Clothing</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/products/women's clothing">
                      Women's Clothing
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </MenuList>
          </Menu>
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/products/electronics" className="hover:text-orange-500">
            Electronics
          </Link>
          <Link to="/products/jewelery" className="hover:text-orange-500">
            Jewelry
          </Link>
          <Link to="/products/men's clothing" className="hover:text-orange-500">
            Men's Clothing
          </Link>
          <Link
            to="/products/women's clothing"
            className="hover:text-orange-500"
          >
            Women's Clothing
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
