
import React from 'react';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';

const Wallet = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <TopBar title="Wallet" />
      
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center mb-6">
          <h2 className="text-lg text-gray-500 mb-1">Total Balance</h2>
          <p className="text-3xl font-bold mb-4">$12,543.86</p>
          
          <div className="flex gap-4 w-full max-w-xs">
            <button className="flex-1 bg-bitvest-purple text-white py-2 rounded-lg font-medium">
              Deposit
            </button>
            <button className="flex-1 border border-bitvest-purple text-bitvest-purple py-2 rounded-lg font-medium">
              Withdraw
            </button>
          </div>
        </div>
        
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Your Assets</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full mr-3"></div>
                <div>
                  <h3 className="font-medium">Bitcoin</h3>
                  <p className="text-xs text-gray-500">BTC</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">0.095 BTC</p>
                <p className="text-sm text-gray-500">$7,837.31</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <h3 className="font-medium">Ethereum</h3>
                  <p className="text-xs text-gray-500">ETH</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">2.45 ETH</p>
                <p className="text-sm text-gray-500">$4,650.10</p>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full mr-3"></div>
                <div>
                  <h3 className="font-medium">Dogecoin</h3>
                  <p className="text-xs text-gray-500">DOGE</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">350 DOGE</p>
                <p className="text-sm text-gray-500">$56.45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Wallet;
