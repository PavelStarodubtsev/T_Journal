import React, { FC, useState } from 'react';
import { setCookie } from 'nookies';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../utils/validations';
import { FormField } from '../FormField';
import { UserApi } from '../../utils/api/users';
import { CreateUserDto } from '../../utils/api/types';
import { Alert } from '@material-ui/lab';
import { useAppDispatch } from '../../redux/hooks';
import { setUserData } from '../../redux/slices/user';

interface RegisterFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ onOpenRegister, onOpenLogin }) => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (error) {
      console.warn('Register error', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullName" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        {errorMessage && (
          <Alert severity="error" className="mb-20">
            {errorMessage}
          </Alert>
        )}
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              onClick={onOpenRegister}
              type="submit"
              color="primary"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
