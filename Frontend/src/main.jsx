import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'          // ← must be here
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom'
import { UserDataContext } from './context/UserContext'; // 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserDataContext>
     <BrowserRouter>
      <App />
    </BrowserRouter>
   </UserDataContext>
  </StrictMode>,
)
