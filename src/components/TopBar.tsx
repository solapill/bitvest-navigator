
import React from 'react';
import { ArrowLeft, HeadphonesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  title: string;
  showBackButton?: boolean;
  showCustomerService?: boolean;
}

const TopBar = ({
  title,
  showBackButton = false,
  showCustomerService = false,
}: TopBarProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 border-b border-gray-200">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {showBackButton && (
            <button
              onClick={() => navigate(-1)}
              className="mr-3 text-gray-700"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className={`font-bold text-lg ${title === 'BitVest' ? 'italic' : ''}`}>
            {title}
          </h1>
        </div>
        {showCustomerService && (
          <button
            className="text-bitvest-purple"
            aria-label="Customer service"
          >
            <HeadphonesIcon size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
