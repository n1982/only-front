import React from 'react';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  margin:0;
  padding:0;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Header />
      </div>
    </>
  );
};

export default App;
