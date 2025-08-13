import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Crown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-yellow-400" />
            <span className="text-white text-xl font-bold">Prestige Palace</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-400 transition-colors duration-300">
              Home
            </Link>
            <Link to="/products/opal" className="text-white hover:text-yellow-400 transition-colors duration-300">
              Opal Collection
            </Link>
            <Link to="/products/diamond" className="text-white hover:text-yellow-400 transition-colors duration-300">
              Diamond Collection
            </Link>
            <Link to="/market-rates" className="text-white hover:text-yellow-400 transition-colors duration-300">
              Live Rates
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative text-white hover:text-yellow-400 transition-colors duration-300">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-300">
                  <User className="h-6 w-6" />
                  <span className="text-sm">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/orders" className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600">
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-300">
                Login
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-400"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-white hover:text-yellow-400">
              Home
            </Link>
            <Link to="/products/opal" className="block px-3 py-2 text-white hover:text-yellow-400">
              Opal Collection
            </Link>
            <Link to="/products/diamond" className="block px-3 py-2 text-white hover:text-yellow-400">
              Diamond Collection
            </Link>
            <Link to="/market-rates" className="block px-3 py-2 text-white hover:text-yellow-400">
              Live Rates
            </Link>
            <Link to="/cart" className="block px-3 py-2 text-white hover:text-yellow-400">
              Cart ({totalItems})
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/orders" className="block px-3 py-2 text-white hover:text-yellow-400">
                  My Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block px-3 py-2 text-white hover:text-yellow-400">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;