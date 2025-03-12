
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-bitvest-light">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-bitvest-dark">BitVest</h1>
        <p className="text-gray-600 mb-10">
          The future of cryptocurrency investing starts here
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-4 w-full fixed bottom-8 left-0 right-0 px-6">
        <button
          className="bitvest-button"
          onClick={() => navigate('/login')}
        >
          Login Account
        </button>
        
        <button
          className="w-[85%] border-2 border-bitvest-purple bg-transparent text-bitvest-purple font-semibold py-3 rounded-lg shadow-sm hover:bg-bitvest-light transition-colors"
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Index;
