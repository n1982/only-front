import React from 'react';
import { Navigate } from 'react-router-dom';

interface RequireAuthProps {
  children: React.ReactNode;
  isAuth: boolean;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ isAuth, children }) => {
  const auth = isAuth;
  if (!auth) {
    return <Navigate to='/login' />;
  }
  return <>{children}</>;
};

export default RequireAuth;
