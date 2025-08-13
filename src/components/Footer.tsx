import React from 'react';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Prestige Palace</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Exquisite jewelry crafted with precision and passion. Discover the finest collection of diamonds and opals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/diamond" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Diamond Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products/opal" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Opal Jewelry
                </Link>
              </li>
              <li>
                <Link to="/market-rates" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Live Market Rates
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/orders" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Track Orders
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">info@prestigepalace.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">123 Luxury Ave, NYC</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 Prestige Palace. All rights reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;