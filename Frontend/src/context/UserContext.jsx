// UserContext.jsx
import React, { createContext, useState } from 'react';

// 1. Create the context
export const UserDataContext = createContext();

// 2. Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email:'',
    fullName:{
        firstName: '',
        lastName: ''
    }
  }); // You can customize this

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
