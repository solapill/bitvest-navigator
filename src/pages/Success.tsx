
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="animate-success mb-6 text-bitvest-purple">
          <CheckCircle2 size={80} />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-bitvest-dark">Register Success.</h1>
        <p className="text-gray-600">
          Your account has been created successfully!
        </p>
      </div>
      
      <button
        className="bitvest-button bottom-fixed"
        onClick={() => navigate('/login')}
      >
        Continue
      </button>
    </div>
  );
};

export default Success;
