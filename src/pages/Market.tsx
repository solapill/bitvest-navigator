
import React from 'react';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';
import { Search } from 'lucide-react';

const Market = () => {
  const topGainers = [
    { name: 'Solana', symbol: 'SOL', price: '$124.18', change: '+12.4%' },
    { name: 'Avalanche', symbol: 'AVAX', price: '$35.62', change: '+9.8%' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.59', change: '+7.2%' },
  ];

  const topLosers = [
    { name: 'Polkadot', symbol: 'DOT', price: '$7.34', change: '-5.6%' },
    { name: 'Litecoin', symbol: 'LTC', price: '$82.91', change: '-3.8%' },
    { name: 'Chainlink', symbol: 'LINK', price: '$14.27', change: '-2.9%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <TopBar title="Market" />
      
      <div className="p-4">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search coins..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitvest-purple"
          />
          <Search className="absolute top-3.5 left-3 text-gray-400" size={20} />
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Top Gainers</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {topGainers.map((coin, index) => (
              <div 
                key={coin.symbol}
                className={`p-4 flex justify-between items-center ${
                  index !== topGainers.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div>
                  <h3 className="font-medium">{coin.name} <span className="text-gray-500 text-sm">{coin.symbol}</span></h3>
                </div>
                <div className="text-right">
                  <p className="font-bold">{coin.price}</p>
                  <p className="text-xs text-green-500">{coin.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Top Losers</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {topLosers.map((coin, index) => (
              <div 
                key={coin.symbol}
                className={`p-4 flex justify-between items-center ${
                  index !== topLosers.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div>
                  <h3 className="font-medium">{coin.name} <span className="text-gray-500 text-sm">{coin.symbol}</span></h3>
                </div>
                <div className="text-right">
                  <p className="font-bold">{coin.price}</p>
                  <p className="text-xs text-red-500">{coin.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Market;
