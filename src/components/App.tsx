import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import UserAuthContext from './context/UserAuthContext';

import Layout from './Layout';
import SignInForm from './pages/SignInForm';
import Profile from './pages/Profile';
import RequireAuth from './hoc/RequireAuth';

const App: React.FC = () => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    <UserAuthContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='login' replace />} />
          <Route path='login' element={<SignInForm />} />
          <Route
            path='profile/:login'
            element={
              <RequireAuth isAuth={userAuth}>
                <Profile />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </UserAuthContext.Provider>
  );
};

export default App;
