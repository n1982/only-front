import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  position: relative;
  margin-bottom: 40px;
  > input {
    opacity: 0;
    margin-right: 20px;
  }

  > input + label {
    cursor: pointer;

    &:before {
      content: ' ';
      position: absolute;
      left: 0;
      top: -3px;
      width: 20px;
      height: 20px;
      border: 1px solid #000000;
      border-radius: 4px;
    }
  }
  > input:checked + label {
    &:after {
      content: ' ';
      position: absolute;
      left: 3px;
      top: 0;
      width: 14px;
      height: 14px;
      border: 1px solid #4a67ff;
      border-radius: 2px;
      background: #4a67ff;
    }
  }
`;
interface CheckboxProps {
  label: string;
}
const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <StyledCheckbox>
      <input
        id='1'
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor='1'>{props.label}</label>
    </StyledCheckbox>
  );
};

export default Checkbox;
