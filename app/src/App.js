import React from 'react';
import './App.css';
import Auth from './auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="671243053489-9lg42obh6rp7rjcvfqnlomt05i69aro6.apps.googleusercontent.com">
        <Auth />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
