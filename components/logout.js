import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout actions here (e.g., clearing local storage, resetting state)

    // After performing logout actions, navigate to the sign-in page
    setTimeout(() => {
      navigate('/SignIn');
    }, 2000); // Redirect after 2 seconds
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Successfully Logged Out</h2>
      <p>You have been successfully logged out.</p>
      <p>Redirecting to sign-in page...</p>
    </div>
  );
};

export default Logout;
