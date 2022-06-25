import {
  useColorMode,
  Box,
  Text,
  FormControl,
  Input,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import Button from './Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../Redux/userReducer';

import getToken from '../Helpers/getToken';

import showToast from '../Helpers/showToast';

const FormLogin = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const dispatch = useDispatch();
  const login = async e => {
    e.preventDefault();
    try {
      const response = await getToken({
        email: email,
        password: password,
      });
      showToast({
        toast: toast,
        title: 'Поздравляем',
        desc: 'Авторизация прошла успешно',
        status: 'success',
      });
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('access', response.data.access);
      dispatch(loginUserAction());
    } catch (error) {
      showToast({
        toast: toast,
        title: 'Ошибка',
        desc: error.response.data.detail,
        status: 'error',
      });
    }
  };
  const isError = email === '' || password === '';
  const isBlur = email.length > 0 && password.length > 0;
  return (
    <Box
      w="360px"
      p="40px"
      bg={colorMode === 'dark' ? '#2C353D' : '#f2f2f2'}
      borderRadius="6px"
    >
      <Text fontSize="20px" fontWeight="700" textAlign="center">
        Добро пожаловать на борт сильных людей
      </Text>
      <FormControl isInvalid={isError}>
        <form onSubmit={e => login(e)}>
          <Input
            placeholder="Почта"
            id="email"
            type="email"
            value={email ? email : ''}
            onChange={handleEmailChange}
            h="48px"
            mt="32px"
          />
          <Input
            placeholder="Пароль"
            id="password"
            type="password"
            value={password ? password : ''}
            onChange={handlePasswordChange}
            h="48px"
            mt="12px"
          />
          {!isError ? (
            <></>
          ) : (
            <FormErrorMessage>Форма не может быть пустой.</FormErrorMessage>
          )}
          <Button type="submit" disabled={isError || !isBlur} mt="32px">
            Войти
          </Button>
        </form>
      </FormControl>
    </Box>
  );
};
export default FormLogin;
