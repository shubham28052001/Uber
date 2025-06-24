import React, { useContext, useEffect } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    const token = localStorage.getItem('token'); // ✅ move inside
    if (!token) {
      navigate('/captain-login');
    }
  }, []); // ✅ don't depend on `token` here

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
