import React from 'react';
import styled from 'styled-components';

interface ValidationErrorMessageProps {
  children: React.ReactNode;
}

const StyledErrorMessage = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #e26f6f;
`;

const ValidationErrorMessage: React.FC<ValidationErrorMessageProps> = ({
  children,
}) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

export default ValidationErrorMessage;
