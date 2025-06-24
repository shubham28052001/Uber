import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    // ✅ Fetch user profile if token exists
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.status === 200) {
        setUser(response.data);
      }
    })
    .catch(err => {
      console.error("Auth error:", err);
      localStorage.removeItem('token');
      navigate('/login');
    });

  }, [token, navigate, setUser]);

  // ✅ Optional: prevent children render until user is loaded
  if (!token || !user) return null;

  return <>{children}</>;
};

export default UserProtectedWrapper;
