import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './Layout';
import SignInForm from './pages/SignInForm';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to='login' replace />} />
        <Route path='login' element={<SignInForm />} />
        <Route path='profile/:login' element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
