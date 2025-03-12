
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-bitvest-light">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-bitvest-dark">BitVest</h1>
        <h2 className="text-2xl text-bitvest-secondary">Cryptocurrency</h2>
        <p className="mt-6 text-gray-600">
          Your all-in-one platform for cryptocurrency trading, portfolio management, and market analysis
        </p>
      </div>
      
      <div className="w-full flex justify-center">
        <button
          className="bitvest-button bottom-fixed"
          onClick={() => navigate('/')}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Welcome;
