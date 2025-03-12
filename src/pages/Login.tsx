
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import ValidationRule from '../components/ValidationRule';
import { supabase } from '../integrations/supabase/client';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Login state
  const [userId, setUserId] = useState('');
  const [userIdTouched, setUserIdTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  
  // Validation states
  const userIdLength = userId.length >= 6 && userId.length <= 15;
  const userIdHasNumber = /[0-9]/.test(userId);
  const userIdValid = userIdLength && userIdHasNumber;
  
  const passwordLength = password.length >= 8 && password.length <= 20;
  const passwordValid = passwordLength;
  
  // Handle form submission
  const handleLogin = async () => {
    if (userIdValid && passwordValid) {
      try {
        setIsLoading(true);
        
        // Create a valid email format using the userId
        const email = `${userId}@bitvest.app`;
        
        // Sign in the user using the email we created
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        
        if (error) {
          console.error('Login error:', error);
          toast.error(error.message || 'Login failed. Please check your credentials.');
          setIsLoading(false);
          return;
        }
        
        toast.success('Login successful!');
        navigate('/home');
      } catch (err) {
        console.error('Login error:', err);
        toast.error('An unexpected error occurred. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-white pt-16 pb-24">
      <TopBar title="Login" showBackButton={true} />
      
      <div className="p-6 flex flex-col items-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          
          <div className="mb-6">
            <label htmlFor="userId" className="block text-gray-700 mb-2">User ID</label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onBlur={() => setUserIdTouched(true)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitvest-purple"
              placeholder="Enter your user ID"
            />
            
            {userIdTouched && (
              <div className="mt-2 space-y-1">
                <ValidationRule 
                  text="6-15 Characters" 
                  isValid={userIdLength} 
                  isTouched={userIdTouched} 
                />
                <ValidationRule 
                  text="One Number (0-9)" 
                  isValid={userIdHasNumber} 
                  isTouched={userIdTouched} 
                />
              </div>
            )}
          </div>
          
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitvest-purple"
              placeholder="Enter your password"
            />
            
            {passwordTouched && !passwordValid && (
              <div className="mt-2">
                <ValidationRule 
                  text="8-20 Characters" 
                  isValid={passwordLength} 
                  isTouched={passwordTouched} 
                />
              </div>
            )}
          </div>
          
          <button
            className="bitvest-button mx-auto"
            disabled={!userIdValid || !passwordValid || isLoading}
            onClick={handleLogin}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
