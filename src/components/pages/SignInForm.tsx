import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Label from '../UI/Label';
import ServerErrorMessage from '../UI/ServerErrorMessage';
import ValidationErrorMessage from '../UI/ValidationErrorMessage';

import styled from 'styled-components';

const Form = styled.form`
  width: 640px;
  padding: 0 5px;
`;
const Input = styled.input.attrs((props) => ({
  type: props.type || `text`,
  name: props.name,
}))`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 24px;
`;

const SignInForm: React.FC = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [serverError, setServerError] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Поле "Email" должно быть заполнено')
      .email('Email не верный'),
    password: Yup.string()
      .min(6, 'Поле "Password" не должно содержать менее 6 символов')
      .required('Поле "Password" должно быть заполнено'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    if (
      data.email === 'steve.jobs@example.com' &&
      data.password === 'password'
    ) {
      navigate(`/profile/${data.email}`, { replace: true });
    } else {
      setLogin(data.email);
      setServerError(true);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {serverError && (
        <ServerErrorMessage>
          Пользователь ${login} не существует
        </ServerErrorMessage>
      )}
      <Label>Логин</Label>
      <Input type='email' {...register('email')} />
      {!!errors?.email && (
        <ValidationErrorMessage>
          {errors?.email?.message}
        </ValidationErrorMessage>
      )}
      <Label>Пароль</Label>
      <Input type='password' {...register('password')} />
      {!!errors?.password && (
        <ValidationErrorMessage>
          {errors?.password?.message}
        </ValidationErrorMessage>
      )}
      <Checkbox label='Запомнить пароль' />
      <Button disabled={false}>Войти</Button>
    </Form>
  );
};
export default SignInForm;
