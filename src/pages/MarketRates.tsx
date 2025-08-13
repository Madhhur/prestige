import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, RefreshCw } from 'lucide-react';

interface MarketData {
  name: string;
  currentPrice: number;
  change24h: number;
  changePercent24h: number;
  high24h: number;
  low24h: number;
  volume: string;
}

const MarketRates: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([
    {
      name: 'Diamond (1 Carat)',
      currentPrice: 5500,
      change24h: 125,
      changePercent24h: 2.3,
      high24h: 5650,
      low24h: 5350,
      volume: '$2.5M'
    },
    {
      name: 'Ethiopian Opal',
      currentPrice: 850,
      change24h: -25,
      changePercent24h: -2.9,
      high24h: 890,
      low24h: 820,
      volume: '$485K'
    },
    {
      name: 'Boulder Opal',
      currentPrice: 1200,
      change24h: 75,
      changePercent24h: 6.7,
      high24h: 1250,
      low24h: 1120,
      volume: '$320K'
    },
    {
      name: 'Fire Opal',
      currentPrice: 650,
      change24h: 30,
      changePercent24h: 4.8,
      high24h: 680,
      low24h: 620,
      volume: '$275K'
    },
    {
      name: 'White Opal',
      currentPrice: 420,
      change24h: -15,
      changePercent24h: -3.4,
      high24h: 445,
      low24h: 410,
      volume: '$180K'
    },
    {
      name: 'Diamond Rough',
      currentPrice: 3200,
      change24h: 95,
      changePercent24h: 3.1,
      high24h: 3280,
      low24h: 3150,
      volume: '$1.8M'
    }
  ]);

  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prevData =>
        prevData.map(item => {
          const priceChange = (Math.random() - 0.5) * 100;
          const newPrice = Math.max(item.currentPrice + priceChange, item.currentPrice * 0.8);
          const change24h = newPrice - item.currentPrice;
          const changePercent24h = (change24h / item.currentPrice) * 100;
          
          return {
            ...item,
            currentPrice: Math.round(newPrice),
            change24h: Math.round(change24h),
            changePercent24h: Math.round(changePercent24h * 100) / 100,
            high24h: Math.max(item.high24h, Math.round(newPrice)),
            low24h: Math.min(item.low24h, Math.round(newPrice))
          };
        })
      );
      setLastUpdate(new Date());
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    setLastUpdate(new Date());
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Live Market Rates</h1>
            <p className="text-lg text-gray-600">
              Real-time pricing for precious stones and jewelry materials
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
              <button
                onClick={refreshData}
                className="p-1 hover:bg-gray-200 rounded transition-colors duration-300"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center space-x-1 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Data</span>
            </div>
          </div>
        </div>

        {/* Market Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-6 text-black">
            <div className="flex items-center space-x-2 mb-2">
              <BarChart3 className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Market Cap</h3>
            </div>
            <p className="text-3xl font-bold">$12.8M</p>
            <p className="text-sm opacity-80">24h volume</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Top Gainer</h3>
            </div>
            <p className="text-2xl font-bold">Boulder Opal</p>
            <p className="text-sm opacity-90">+6.7% today</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg p-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingDown className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Active Traders</h3>
            </div>
            <p className="text-3xl font-bold">1,247</p>
            <p className="text-sm opacity-90">in last 24h</p>
          </div>
        </div>

        {/* Market Data Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Market Data</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    24h Change
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    24h High
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    24h Low
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Volume
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {marketData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-bold text-gray-900">
                        ${item.currentPrice.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className={`flex items-center justify-end space-x-1 ${
                        item.change24h >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.change24h >= 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        <span className="text-sm font-medium">
                          ${Math.abs(item.change24h)} ({Math.abs(item.changePercent24h)}%)
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">
                        ${item.high24h.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">
                        ${item.low24h.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900">{item.volume}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Analysis */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Market Trends</h3>
              <p className="text-gray-600">
                The precious stone market continues to show strong performance with boulder opals 
                leading gains at +6.7%. Diamond prices remain stable with consistent demand from 
                luxury jewelry manufacturers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Trading Insights</h3>
              <p className="text-gray-600">
                Ethiopian opals are experiencing temporary correction after recent highs. 
                Market volatility remains within normal ranges with healthy trading volumes 
                across all major stone categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketRates;