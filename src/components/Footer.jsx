import React from "react";
import { MapPin, Phone, Mail, Clock, ImageOff } from "lucide-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <img src={assets.logo} alt="Shopstic Logo" className="w-40" />
            <p className="text-gray-600 mt-3">
              Awesome Sutra Store Products
            </p>
            <div className="mt-4 space-y-2 text-gray-600 w-200">
              <p className="flex items-center">
                <MapPin size={18} className="text-green-600 mr-2" />
                <strong>Address:</strong> 607, Link, 100 Feet Rd,Gota, Ahmedabad, Gujarat 382481
              </p>
              <p className="flex items-center">
                <Phone size={18} className="text-green-600 mr-2" />
                <strong>Call Us:</strong> (+91) -8780031699
              </p>
              <p className="flex items-center">
                <Mail size={18} className="text-green-600 mr-2" />
                <strong>Email:</strong> support@sutraanalytics.com
              </p>
              <p className="flex items-center">
                <Clock size={18} className="text-green-600 mr-2" />
                <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
              </p>
            </div>
          </div>

          <div className="pl-60">
            <h3 className="font-bold text-gray-800 text-2xl">SITEMAP</h3>
            <ul className="mt-6 space-y-2 text-gray-600 w-60">
              <li><Link to={"/"} className="hover:text-orange-500">Home</Link></li>
              <li><Link to={"/products/electronics"} className="hover:text-orange-500">Electronics Information</Link></li>
              <li><Link to={"/products/jewelery"} className="hover:text-orange-500">Jewellary</Link></li>
              <li><Link to={"/products/men's clothing"} className="hover:text-orange-500">Men's Fashion</Link></li>
              <li><Link to={"/products/women's clothing"} className="hover:text-orange-500">Women's Fashion</Link></li>
              
            </ul>
          </div>  
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2024, Sutra Store. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-green-600 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-green-600 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-green-600 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-green-600 text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;