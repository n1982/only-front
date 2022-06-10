import React from 'react';

import attentionSvg from '../assets/svg/attention.svg';

import styled from 'styled-components';

interface ServerErrorMessageProps {
  children: React.ReactNode;
}

const StyledMessage = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-bottom: 30px;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  outline: none;
`;
const ErrorText = styled.div`
  font-size: 20px;
`;

const ServerErrorMessage: React.FC<ServerErrorMessageProps> = ({
  children,
}) => {
  return (
    <StyledMessage>
      <img src={attentionSvg} alt='attention' />
      <ErrorText>{children}</ErrorText>
    </StyledMessage>
  );
};

export default ServerErrorMessage;
