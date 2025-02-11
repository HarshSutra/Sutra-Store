import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import CartPopup from "../components/CartPopup";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const SignInPopup = ({
  isOpen,
  onClose,
  userData,
  onNewUserClick,
  setLoggedInUser,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert("Login successful");
      localStorage.setItem("loggedInUserId", user.id);
      setLoggedInUser(user);
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

const UserProfilePopup = ({ isOpen, onClose, user, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl mb-4">User Profile</h2>
        {user ? (
          <div>
            <p>
              <strong>Name:</strong> {user.name.firstname} {user.name.lastname}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <div className="mt-4 flex justify-between">
              <button onClick={onClose} className="text-gray-600">
                Close
              </button>
              <button onClick={onLogout} className="text-red-500">
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
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
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("https://fakestoreapi.com/users");
      const data = await response.json();
      setUserData(data);
    };
    fetchUserData();

    const storedUserId = localStorage.getItem("loggedInUserId");
    if (storedUserId) {
      fetch(`https://fakestoreapi.com/users/${storedUserId}`)
        .then((res) => res.json())
        .then((user) => setLoggedInUser(user))
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, []);

  const fetchCartData = async () => {
    if (!loggedInUser) {
      alert("Please log in to view your cart.");
      return;
    }

    try {
      const response = await fetch(
        `https://fakestoreapi.com/carts/user/${loggedInUser.id}`
      );
      const data = await response.json();
      setCartData(data);
      setIsCartPopupOpen(true);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      alert("Failed to load cart data.");
    }
  };

  const handleNewUserClick = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(true);
  };

  const addNewUser = (newUser) => {
    setUserData((prevData) => [...prevData, newUser]);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUserId")
    setIsProfilePopupOpen(false);
  };

  return (
    <header className="bg-white shadow-md py-3">
      <div className="mx-auto flex justify-between items-center px-10">
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <img src={assets.logo} alt="Logo" className="h-15" />
          </Link>
        </div>

        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for items..."
            className="w-[80%] h-9 p-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-6 gap-4">
          {/* <Link className="flex items-center text-gray-700">❤ Wishlist</Link> */}
          <Link
            className="flex items-center text-gray-700"
            onClick={fetchCartData}
          >
            🛒 Cart
          </Link>
          {loggedInUser ? (
            <>
            <button onClick={() => setIsProfilePopupOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button onClick={handleLogout} className="bg-orange-500 w-25 h-8 text-white rounded-md">Logout</button>
            </>
          ) : (
            <button
              className="bg-orange-500 w-25 h-8 text-white rounded-md"
              onClick={() => setIsSignInPopupOpen(true)}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      <nav className="bg-gray-100 py-2 h-10">
        <div className="mx-auto flex justify-center space-x-6 gap-10">
          <Menu>
            <MenuHandler>
              <Button className="bg-orange-500 w-60 h-8 justify-center p-2">
                {" "}
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
          <Link
            to="/products/women's clothing"
            className="hover:text-orange-500"
          >
            Women's Clothing
          </Link>
        </div>
      </nav>

      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={() => setIsSignInPopupOpen(false)}
        userData={userData}
        onNewUserClick={handleNewUserClick}
        setLoggedInUser={setLoggedInUser}
      />
      <UserProfilePopup
        isOpen={isProfilePopupOpen}
        onClose={() => setIsProfilePopupOpen(false)}
        user={loggedInUser}
        onLogout={handleLogout}
      />

      {/* <UserProfilePopup
        isOpen={isProfilePopupOpen}
        onClose={() => setIsProfilePopupOpen(false)}
        user={loggedInUser}
      /> */}
      <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={() => setIsSignUpPopupOpen(false)}
        addUser={addNewUser}
      />
      <CartPopup
        isOpen={isCartPopupOpen}
        onClose={() => setIsCartPopupOpen(false)}
        cartData={cartData}
      />
    </header>
  );
};

export default Header;