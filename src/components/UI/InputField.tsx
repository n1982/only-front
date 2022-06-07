import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
}

const Input = styled.input.attrs((props: InputProps) => ({
  type: props.type || `text`,
}))`
  width: 640px;
  height: 60px;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #f5f5f5;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  outline: none;
  font-size: 24px;
`;

const InputField: React.FC<InputProps> = (props) => {
  return <Input {...props} />;
};

export default InputField;
