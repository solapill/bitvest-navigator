
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wallet, LineChart, History, User } from 'lucide-react';

const BottomNavbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/wallet', label: 'Wallet', icon: Wallet },
    { path: '/market', label: 'Market', icon: LineChart },
    { path: '/history', label: 'History', icon: History },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-10">
      <div className="flex justify-between px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 ${
                isActive ? 'text-bitvest-purple' : 'text-gray-500'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavbar;
