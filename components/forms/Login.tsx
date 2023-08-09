import React, { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@material-ui/core';
import { LoginFormSchema } from '../../utils/validations';
import { FormField } from '../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data) => {
    console.log('dataLogin', data);
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button disabled={!form.formState.isValid} color="primary" variant="contained" type="submit">
              Войти
            </Button>
            <Button onClick={onOpenRegister} color="primary" variant="text">
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
