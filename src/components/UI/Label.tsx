import React, { Children } from 'react';
import styled from 'styled-components';

const LabelStyled = styled.div`
  margin-bottom: 10px;
`;

interface LabelProps {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children }) => {
  return <LabelStyled>{children}</LabelStyled>;
};
