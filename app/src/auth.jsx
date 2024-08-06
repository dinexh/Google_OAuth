import React, { useEffect } from 'react';

function GoogleLogin() {
  useEffect(() => {
    const initializeGapi = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: '671243053489-9lg42obh6rp7rjcvfqnlomt05i69aro6.apps.googleusercontent.com',
        }).then(() => {
          console.log('Google Auth initialized');
        }).catch(error => {
          console.error('Error initializing Google Auth:', error);
        });
      });
    };

    if (!window.gapi) {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.onload = initializeGapi;
      script.onerror = (error) => {
        console.error('Error loading Google API script:', error);
      };
      document.body.appendChild(script);
    } else {
      initializeGapi();
    }
  }, []);

  const handleLogin = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => {
      console.log('Logged in user:', googleUser);
      const id_token = googleUser.getAuthResponse().id_token;
      // Send id_token to your backend for further processing
    }).catch(error => {
      console.error('Error during Google sign-in:', error);
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default GoogleLogin;
