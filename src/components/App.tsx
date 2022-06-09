import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Main from './Main';
import Profile from './pages/Profile';
import SignInForm from './pages/SignInForm';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Helvetica Neue', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Header />
        <Main>
          <Profile />
        </Main>
      </div>
    </>
  );
};

export default App;
