import request from './request';

const getUser = ({ email, password }) => {
  return request({
    endPoint: 'token',
    method: 'post',
    data: {
      email: email,
      password: password,
    },
  });
};

export default getUser;
