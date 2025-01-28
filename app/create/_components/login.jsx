
import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = '/api/auth/login';
  };

  return (
    <div>
      
      <button onClick={handleLogin}></button>
    </div>
  );
};

export default Login;
