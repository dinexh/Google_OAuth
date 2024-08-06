import React from 'react';
import './App.css';
import LoginImage from './login.png';
import { GoogleLogin } from '@react-oauth/google';

const Auth = () => {
  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    // Handle the Google login response, e.g., send it to your server
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login error:', error);
  };

  return (
    <div className="auth-container">
      <div className="auth-container-in">
        <div className="auth-container-in-one">
          <img 
            src={LoginImage} 
            className="Auth_image" 
            alt="Auth" 
          />
        </div>
        <div className="auth-container-in-two">
          <h1>Authentication</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <div className="google-login">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
