import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-kaexibktk7epgbhk.us.auth0.com"
    clientId="dbiCGYCknepTVJ5vu69dBSuj9nJmGuWE"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
    </BrowserRouter>
  </React.StrictMode>,
);
