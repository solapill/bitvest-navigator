
import React from 'react';
import TopBar from '../components/TopBar';
import BottomNavbar from '../components/BottomNavbar';
import { 
  User, Settings, CreditCard, Lock, 
  Bell, HelpCircle, LogOut 
} from 'lucide-react';

const Profile = () => {
  const menuItems = [
    { icon: User, label: 'Personal Information', href: '#' },
    { icon: CreditCard, label: 'Payment Methods', href: '#' },
    { icon: Lock, label: 'Security', href: '#' },
    { icon: Bell, label: 'Notifications', href: '#' },
    { icon: Settings, label: 'Preferences', href: '#' },
    { icon: HelpCircle, label: 'Help & Support', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <TopBar title="Profile" />
      
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center mb-6">
          <div className="w-20 h-20 bg-bitvest-purple rounded-full mb-3 flex items-center justify-center text-white text-2xl font-bold">
            U
          </div>
          <h2 className="text-xl font-bold mb-1">User123</h2>
          <p className="text-sm text-gray-500 mb-3">user123@example.com</p>
          <button className="text-sm text-bitvest-purple font-medium">
            Edit Profile
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`p-4 flex items-center ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <item.icon size={20} className="text-gray-600 mr-3" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        
        <button className="w-full p-4 flex items-center text-red-500 bg-white rounded-lg shadow-sm">
          <LogOut size={20} className="mr-3" />
          <span>Log Out</span>
        </button>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Profile;
