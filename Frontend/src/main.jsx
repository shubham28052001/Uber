// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserDataProvider } from './context/UserContext.jsx';
import { CaptainDataProvider } from './context/CaptainContext.jsx'; // ✅ Corrected

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CaptainDataProvider> {/* ✅ Correct wrapper */}
      <UserDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserDataProvider>
    </CaptainDataProvider>
  </React.StrictMode>
);
