
import React from 'react';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';
import { ArrowDownUp, ArrowDown, ArrowUp } from 'lucide-react';

const History = () => {
  const transactions = [
    { 
      type: 'buy', 
      coin: 'Bitcoin', 
      symbol: 'BTC', 
      amount: '0.025 BTC', 
      value: '$2,062.45', 
      date: 'May 15, 2024',
      time: '09:45 AM'
    },
    { 
      type: 'sell', 
      coin: 'Ethereum', 
      symbol: 'ETH', 
      amount: '1.5 ETH', 
      value: '$2,847.00', 
      date: 'May 12, 2024',
      time: '02:30 PM'
    },
    { 
      type: 'transfer', 
      coin: 'XRP', 
      symbol: 'XRP', 
      amount: '250 XRP', 
      value: '$550.00', 
      date: 'May 10, 2024',
      time: '11:20 AM'
    },
    { 
      type: 'buy', 
      coin: 'Solana', 
      symbol: 'SOL', 
      amount: '5 SOL', 
      value: '$620.90', 
      date: 'May 07, 2024',
      time: '04:15 PM'
    },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'buy':
        return <ArrowDown className="text-green-500" size={18} />;
      case 'sell':
        return <ArrowUp className="text-red-500" size={18} />;
      case 'transfer':
        return <ArrowDownUp className="text-blue-500" size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <TopBar title="Transaction History" />
      
      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-700">Recent Transactions</h2>
            <button className="text-sm text-bitvest-purple">See All</button>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {transactions.map((tx, index) => (
              <div 
                key={index}
                className={`p-4 ${
                  index !== transactions.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full mr-3 flex items-center justify-center">
                      {getIcon(tx.type)}
                    </div>
                    <div>
                      <h3 className="font-medium capitalize">{tx.type} {tx.coin}</h3>
                      <p className="text-xs text-gray-500">{tx.date} • {tx.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{tx.amount}</p>
                    <p className="text-sm text-gray-500">{tx.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h3 className="font-medium mb-2">Filter Transactions</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-full text-sm bg-bitvest-purple text-white">
              All
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-sm">
              Buy
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-sm">
              Sell
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-sm">
              Transfer
            </button>
          </div>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default History;
