import React, { useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import './Components/styles/index.css';

import Header from './Components/Header';
import Main from './Pages/Main';
import Login from './Pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import getUser from './Helpers/getUser';

import { loginUserAction, setUserAction } from './Redux/userReducer';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useSelector(state => state.user.auth);
  const dispatch = useDispatch();
  const getUserData = async () => {
    try {
      const response = await getUser();
      dispatch(setUserAction(response.data));
    } catch {}
  };
  useEffect(() => {
    if (localStorage.getItem('access')) {
      dispatch(loginUserAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (location.pathname !== '/login' && auth === false) {
      navigate('/login');
    } else if (location.pathname !== '/' && auth === true) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, auth]);
  useEffect(() => {
    if (auth) {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Routes>
        {auth ? (
          <Route path="/" element={<Main />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
