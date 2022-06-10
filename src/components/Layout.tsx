import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

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

const Layout = () => (
  <>
    <GlobalStyle />
    <Header />
    <Main>
      <Outlet />
    </Main>
  </>
);

export default Layout;
