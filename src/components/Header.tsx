import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const HeaderTitle = styled.div`
  font-size: 64px;
  font-weight: 700;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>ONLY.</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
