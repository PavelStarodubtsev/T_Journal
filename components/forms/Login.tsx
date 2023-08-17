import React, { FC, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { LoginFormSchema } from '../../utils/validations';
import { FormField } from '../FormField';
import { LoginDto } from '../../utils/api/types';
import { setCookie } from 'nookies';
import { useAppDispatch } from '../../redux/hooks';
import { setUserData } from '../../redux/slices/user';
import { Api } from '../../utils/api';

interface LoginFormProps {
  onOpenRegister: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await Api().user.login(dto);

      setCookie(null, 'rtoken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (error) {
      console.warn('Login error', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
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
              color="primary"
              variant="contained"
              type="submit"
            >
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
