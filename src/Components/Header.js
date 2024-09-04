import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-yellow-400 py-4 shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4">
      <h1 className="text-3xl font-bold text-white">Bakery Shop</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/products" className="text-white hover:text-gray-200">All Products</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-200">About Us</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-200">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
