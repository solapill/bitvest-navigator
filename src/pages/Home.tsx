
import React from 'react';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

interface CryptoItem {
  name: string;
  symbol: string;
  price: string;
  change?: string;
  changePercent?: string;
}

const Home = () => {
  const cryptoItems: CryptoItem[] = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$82,498', change: '+$1,243', changePercent: '+1.53%' },
    { name: 'Ethereum', symbol: 'ETH', price: '$1,898', change: '-$24', changePercent: '-1.25%' },
    { name: 'XRP', symbol: 'XRP', price: '$2.20', change: '+$0.15', changePercent: '+7.31%' },
    { name: 'Binance', symbol: 'BNB', price: '$549,36', change: '+$12.43', changePercent: '+2.31%' },
    { name: 'Solana', symbol: 'SOL', price: '$124,18', change: '-$3.27', changePercent: '-2.57%' },
    { name: 'Dogecoin', symbol: 'DOGE', price: '$0.16', change: '+$0.01', changePercent: '+6.45%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <TopBar title="BitVest" showCustomerService={true} />
      
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Market Overview</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {cryptoItems.map((crypto, index) => (
              <div 
                key={crypto.symbol}
                className={`p-4 flex justify-between items-center ${
                  index !== cryptoItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div>
                  <h3 className="font-medium">{crypto.name} <span className="text-gray-500 text-sm">{crypto.symbol}</span></h3>
                </div>
                <div className="text-right">
                  <p className="font-bold">{crypto.price}</p>
                  {crypto.change && (
                    <p className={`text-xs ${crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {crypto.change} ({crypto.changePercent})
                    </p>
                  )}
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

export default Home;
