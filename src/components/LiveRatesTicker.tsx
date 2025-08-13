import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface RateData {
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const LiveRatesTicker: React.FC = () => {
  const [rates, setRates] = useState<RateData[]>([
    { name: 'Diamond (1ct)', price: 5500, change: 125, changePercent: 2.3 },
    { name: 'Ethiopian Opal', price: 850, change: -25, changePercent: -2.9 },
    { name: 'Boulder Opal', price: 1200, change: 75, changePercent: 6.7 },
    { name: 'Fire Opal', price: 650, change: 30, changePercent: 4.8 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prevRates =>
        prevRates.map(rate => {
          const randomChange = (Math.random() - 0.5) * 100;
          const newPrice = Math.max(rate.price + randomChange, rate.price * 0.8);
          const change = newPrice - rate.price;
          const changePercent = (change / rate.price) * 100;
          
          return {
            ...rate,
            price: Math.round(newPrice),
            change: Math.round(change),
            changePercent: Math.round(changePercent * 100) / 100
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-400 py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <div className="inline-flex items-center space-x-8">
          {rates.map((rate, index) => (
            <div key={index} className="inline-flex items-center space-x-2 text-black">
              <span className="font-semibold">{rate.name}:</span>
              <span className="font-bold">${rate.price}</span>
              <div className={`flex items-center ${rate.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {rate.change >= 0 ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span className="text-sm ml-1">
                  ${Math.abs(rate.change)} ({Math.abs(rate.changePercent)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveRatesTicker;