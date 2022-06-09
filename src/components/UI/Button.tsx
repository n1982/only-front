import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs((props: ButtonProps) => ({
  type: 'submit',
  disabled: props.disabled || false,
}))`
  width: 100%;
  height: 60px;
  padding: 0;
  border: none;
  font-style: inherit;
  background: #4a67ff;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({ disabled, children }) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
