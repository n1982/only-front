import React from 'react';
import styled from 'styled-components';
import Button from './UI/Button';
import Checkbox from './UI/Checkbox';
import InputField from './UI/InputField';
import { Label } from './UI/Label';
import ServerErrorMessage from './UI/ServerErrorMessage';
import ValidationErrorMessage from './UI/ValidationErrorMessage';

interface SignInFormProps {}

const Form = styled.form`
  width: 640px;
  padding: 0 5px;
`;

const SignInForm: React.FC<SignInFormProps> = () => {
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Form submit');
      }}
    >
      <ServerErrorMessage />
      <Label>Логин</Label>
      <InputField type='email' />
      <ValidationErrorMessage />
      <Label>Пароль</Label>
      <InputField type='password' />
      <ValidationErrorMessage />
      <Checkbox label='Запомнить пароль' />
      <Button disabled={false}>Войти</Button>
    </Form>
  );
};
export default SignInForm;
