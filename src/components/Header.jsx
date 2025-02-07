import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const SignInPopup = ({ isOpen, onClose, userData, onNewUserClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert("Login successful");
      onClose();
    } else {
      alert("Invalid email or password");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 p-2 mb-4 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 p-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            className="bg-orange-500 w-full h-10 text-white rounded-md"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4">
          <span className="text-gray-600">New User? </span>
          <button onClick={onNewUserClick} className="text-orange-500">
            Create an account
          </button>
          <button onClick={onClose} className="text-gray-600 pl-22 text-10">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const SignUpPopup = ({ isOpen, onClose, addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    addUser(newUser);
    alert("Sign Up successful!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 p-2 mb-4 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 p-2 mb-4 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 p-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            className="bg-orange-500 w-full h-10 text-white rounded-md"
          >
            Create Account
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-10 pl-35 text-gray-600">
          Close
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("https://fakestoreapi.com/users");
      const data = await response.json();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  const handleNewUserClick = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(true);
  };

  const addNewUser = (newUser) => {
    setUserData((prevData) => [...prevData, newUser]);
  };

  return (
    <header className="bg-white shadow-md py-3">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <img src={assets.logo} alt="Logo" className="h-15" />
        </div>

        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for items..."
            className="w-[80%] h-9 p-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-6 gap-4">
          <Link className="flex items-center text-gray-700">❤ Wishlist</Link>
          <Link className="flex items-center text-gray-700">🛒 Cart</Link>
          <button
            className="bg-orange-500 w-25 h-8 items-center text-white rounded-md"
            onClick={() => setIsSignInPopupOpen(true)}
          >
            Sign In
          </button>
        </div>
      </div>
      <nav className="bg-gray-100 py-2 h-10">
        <div className="container mx-auto flex justify-center space-x-6 gap-10">
          <Menu>
            <MenuHandler>
              <Button className="bg-orange-500 w-60 h-8 justify-center p-2">
                {" "}
                Browse All Categories
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>All Categories</MenuItem>
              <MenuItem>Jewelry</MenuItem>
              <MenuItem>Electronics</MenuItem>
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
                  <MenuItem>Men's Clothing</MenuItem>
                  <MenuItem>Women's Clothing</MenuItem>
                </MenuList>
              </Menu>
            </MenuList>
          </Menu>
          <a href="/" className="hover:text-orange-500">
          Home
        </a>
        <Link to="/products/electronics" className="hover:text-orange-500">
          Electronics
        </Link>
        <Link to="/products/jewelery" className="hover:text-orange-500">
          Jewelry
        </Link>
        <Link to="/products/men's clothing" className="hover:text-orange-500">
          Men's Clothing
        </Link>
        <Link to="/products/women's clothing" className="hover:text-orange-500">
          Women's Clothing
        </Link>

          {/* <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            Fashion
          </a>
          <a href="#" className="hover:text-orange-500">
            Electronics
          </a>
          <a href="#" className="hover:text-orange-500">
            Bags
          </a>
          <a href="#" className="hover:text-orange-500">
            Footwear
          </a>
          <a href="#" className="hover:text-orange-500">
            Groceries
          </a>
          <a href="#" className="hover:text-orange-500">
            Beauty
          </a>
          <a href="#" className="hover:text-orange-500">
            Shop
          </a> */}
        </div>
      </nav>

      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={() => setIsSignInPopupOpen(false)}
        userData={userData}
        onNewUserClick={handleNewUserClick}
      />
      <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={() => setIsSignUpPopupOpen(false)}
        addUser={addNewUser}
      />
    </header>
  );
};

export default Header;
