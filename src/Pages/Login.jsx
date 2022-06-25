import { Flex } from '@chakra-ui/react';
import FormLogin from '../Components/FormLogin';

const Login = () => {
  return (
    <Flex h="calc(100vh - 64px)" alignItems="center" justifyContent="center">
      <FormLogin />
    </Flex>
  );
};

export default Login;
