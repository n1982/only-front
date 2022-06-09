import React from 'react';
import styled from 'styled-components';

import attentionSvg from '../assets/svg/attention.svg';

interface ServerErrorMessageProps {}

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

const ServerErrorMessage: React.FC<ServerErrorMessageProps> = () => {
  return (
    <StyledMessage>
      <img src={attentionSvg} alt='attention' />
      <ErrorText>Пользователя test.user@example.com не существует</ErrorText>
    </StyledMessage>
  );
};

export default ServerErrorMessage;
