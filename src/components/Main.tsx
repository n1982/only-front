import React from 'react';
import styled from 'styled-components';

interface MainProps {
  children: React.ReactNode;
}

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
`;
const Main: React.FC<MainProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
