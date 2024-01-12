// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end p-4 bg-blue-500">
      <Link to="/" className="text-white mx-2 hover:text-gray-300">
        Home
      </Link>
      <Link to="/transactions" className="text-white mx-2 hover:text-gray-300">
        Transactions
      </Link>
      <Link to="/beneficiary" className="text-white mx-2 hover:text-gray-300">
        Beneficiary
      </Link>
    </nav>
  );
};

export default Navbar;
