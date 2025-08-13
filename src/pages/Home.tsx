import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Diamond, TrendingUp, Star } from 'lucide-react';
import LiveRatesTicker from '../components/LiveRatesTicker';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Container */}
   <section className="relative h-100 bg-black flex items-center justify-center overflow-hidden pb-6">        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">

            <span className="text-yellow-400">Prestige</span> Palace

          </h1>
          <p className="text-xl md:text-2xl mb-8">Where Luxury Meets Excellence</p>
          <div className="bg-gray-800 rounded-lg p-4 mb-6 ">
            <p className="text-sm text-yellow-400 mb-2">Featured Video Container</p>
             {/* Video Container with controlled size */}
            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden relative">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover absolute inset-0"
              >
                <source src="/videos/showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
           
            </div>
          </div>
          <Link
            to="/products"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-block mb-8 mt-8"
          >
            Explore Collections
          </Link>
        </div>
      </section>

      {/* Live Market Rates */}
      <LiveRatesTicker />

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exquisite Collections
            </h2>
            <p className="text-lg text-gray-600">Discover our carefully curated selection of premium jewelry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/products/opal"
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-400 via-red-500 to-pink-600">
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <Gem className="h-16 w-16 mb-4 text-yellow-400" />
                  <h3 className="text-3xl font-bold mb-2">Opal Collection</h3>
                  <p className="text-center text-lg opacity-90">
                    Mesmerizing fire opals and ethereal boulder opals
                  </p>
                  <div className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full group-hover:bg-yellow-300 transition-colors duration-300">
                    Explore Opals
                  </div>
                </div>
              </div>
            </Link>
            
            <Link
              to="/products/diamond"
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600">
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <Diamond className="h-16 w-16 mb-4 text-yellow-400" />
                  <h3 className="text-3xl font-bold mb-2">Diamond Collection</h3>
                  <p className="text-center text-lg opacity-90">
                    Brilliant cuts and timeless elegance
                  </p>
                  <div className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full group-hover:bg-yellow-300 transition-colors duration-300">
                    Explore Diamonds
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-300">
              <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Market Rates</h3>
              <p className="text-gray-600">Real-time pricing updates for precious stones</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-300">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked gems with certified authenticity</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-300">
              <Gem className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">Meticulously designed by master artisans</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;