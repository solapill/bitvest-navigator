
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import ValidationRule from '../components/ValidationRule';

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  // Step 1 state
  const [userId, setUserId] = useState('');
  const [userIdTouched, setUserIdTouched] = useState(false);
  
  // Step 2 state
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  
  // Validation states
  const userIdLength = userId.length >= 6 && userId.length <= 15;
  const userIdHasNumber = /[0-9]/.test(userId);
  const userIdValid = userIdLength && userIdHasNumber;
  
  const passwordLength = password.length >= 8 && password.length <= 20;
  const passwordHasSpecial = /[!*%&#@*$]/.test(password);
  const passwordHasUpper = /[A-Z]/.test(password);
  const passwordHasLower = /[a-z]/.test(password);
  const passwordHasNumber = /[0-9]/.test(password);
  const passwordsMatch = password === confirmPassword && confirmPassword !== '';
  
  const passwordValid = 
    passwordLength && 
    passwordHasSpecial && 
    passwordHasUpper && 
    passwordHasLower && 
    passwordHasNumber && 
    passwordsMatch;
  
  // Handle form submission
  const handleContinue = () => {
    if (step === 1 && userIdValid) {
      setStep(2);
    } else if (step === 2 && passwordValid) {
      navigate('/home');
    }
  };
  
  return (
    <div className="min-h-screen bg-white pt-16 pb-24">
      <TopBar title="Login" showBackButton={true} />
      
      <div className="p-6 flex flex-col items-center">
        {step === 1 ? (
          /* Step 1: User ID */
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">UserID</h2>
            
            <div className="mb-6">
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                onBlur={() => setUserIdTouched(true)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitvest-purple"
                placeholder="Enter your user ID"
              />
            </div>
            
            <div className="mb-8 space-y-2">
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
            
            <button
              className="bitvest-button mx-auto"
              disabled={!userIdValid}
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        ) : (
          /* Step 2: Password */
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Password</h2>
            
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitvest-purple"
                placeholder="Enter your password"
              />
            </div>
            
            <h2 className="text-lg font-medium mb-2">Confirm Password</h2>
            <div className="mb-6">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => setConfirmPasswordTouched(true)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitvest-purple"
                placeholder="Confirm your password"
              />
            </div>
            
            <div className="mb-8 space-y-2">
              <ValidationRule 
                text="8-20 Characters" 
                isValid={passwordLength} 
                isTouched={passwordTouched} 
              />
              <ValidationRule 
                text="One Character (!*%&#@*$)" 
                isValid={passwordHasSpecial} 
                isTouched={passwordTouched} 
              />
              <ValidationRule 
                text="One Upper case (A-Z)" 
                isValid={passwordHasUpper} 
                isTouched={passwordTouched} 
              />
              <ValidationRule 
                text="One Lower case (a-z)" 
                isValid={passwordHasLower} 
                isTouched={passwordTouched} 
              />
              <ValidationRule 
                text="One Number (0-9)" 
                isValid={passwordHasNumber} 
                isTouched={passwordTouched} 
              />
              <ValidationRule 
                text="Passwords Match" 
                isValid={passwordsMatch} 
                isTouched={confirmPasswordTouched} 
              />
            </div>
            
            <button
              className="bitvest-button mx-auto"
              disabled={!passwordValid}
              onClick={handleContinue}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
