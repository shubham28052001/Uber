import React, { useEffect } from 'react';

const CaptainHome = () => {
  useEffect(() => {
    console.log("✅ CaptainHome component mounted");
  }, []);

  return (
    <div style={{ color: 'black', fontSize: '24px', padding: '20px' }}>
      CAPTAIN HOME PAGE
    </div>
  );
};

export default CaptainHome;
