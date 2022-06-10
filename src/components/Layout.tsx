import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import GlobalFonts from '../fonts/HelveticaNeue/fonts';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'HelveticaNeueCyr', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`;

const Layout = () => (
  <>
    <GlobalStyle />
    <GlobalFonts />
    <Header />
    <Main>
      <Outlet />
    </Main>
  </>
);

export default Layout;
